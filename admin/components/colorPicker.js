import React, { useRef, useState , useEffect} from "react";
import {
  SingleSelect as Select,
  SingleSelectOption as Option,
  Tooltip,
  Popover,
  IconButton
} from "@strapi/design-system";
import { useIntl } from "react-intl";
import { Information, Paint } from "@strapi/icons";
import { HexColorPicker } from "react-colorful";
import { useSystemTheme } from "../hooks/use-system-theme";

const ColorPickerField = ({
  name,
  value,
  onChange,
  attribute,
  error,
  required,
  intlLabel,
}) => {
  const { formatMessage } = useIntl();
  const theme = useSystemTheme();

  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";
  const colors = attribute?.options["colors"] ?? "[]";
  const useColorPalette = attribute?.options["color-palette"] ?? false;

  const Options = JSON.parse(colors);
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef();


  const colorOptions = Options.includes(value) || !value
    ? Options
    : [...Options, value];

  const handleColorPick = (hex) => {
    onChange({ target: { name, value: hex, type: "string" } });
    setShowPopover(false);
  };


useEffect(() => {
  const saveColorsIfFirstTime = async () => {

    const colorList = Array.isArray(Options) ? Options : [];


    if (colorList.length === 0) return;

    try {
      const existing = await fetch("/superfields/colors", { method: "GET" }).then(res => res.json());
      console.log('existing', existing)

      if (!existing.data) {
        for (const hex of colorList) {

          await fetch("/superfields/colors", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({data: { hex }}),
          });
        }
      }
      

    } catch (err) {
      console.error("Error saving colors from options:", err);
    }
  };

  saveColorsIfFirstTime();
}, []);
  

  return (
    <div style={{ position: "relative" }}>
      <Select
        value={value}
        label={formatMessage(intlLabel)}
        hint={description}
        error={error}
        required={required}
        onChange={(val) =>
          onChange({ target: { name, value: val, type: "string" } })
        }
        id={name}
        labelAction={
          tooltipContent ? (
            <Tooltip description={tooltipContent}>
              <Information aria-hidden />
            </Tooltip>
          ) : null
        }
        style={{ paddingRight: "36px" }} 
      >
        {colorOptions.map((opt, idx) => (
          <Option key={idx} value={opt}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {opt}
              <div
                style={{
                  background: opt,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginLeft: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </Option>
        ))}
      </Select>

      {useColorPalette && (
        <>
          <div style={{ position: "absolute", top: 25, right:25, zIndex: 2 }}>
            <IconButton
              label="Pick a color"
              icon={<Paint />}
              noBorder
              ref={buttonRef}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowPopover((prev) => !prev);
              }}
            />
          </div>

          {showPopover && (
            <Popover
              source={buttonRef}
              spacing={4}
              onBlur={() => setShowPopover(false)}
            >
              <div
                style={{
                  padding: 12,
                  backgroundColor: theme === "dark" ? "#2C2C2C" : "#fff",
                }}
              >
                <HexColorPicker
                  color={value || "#000000"}
                  onChange={handleColorPick}
                />
                <div style={{ marginTop: 8, color:theme === "dark" ? "#fff" : "#000" }}>
                  <strong>
                    Picked:
                  </strong>
                  {value}
                </div>
              </div>
            </Popover>
          )}
        </>
      )}
    </div>
  );
};

export default ColorPickerField;
