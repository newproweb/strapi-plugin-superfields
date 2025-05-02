import React, {  useState, useEffect } from "react";
import {
  SingleSelect as Select,
  SingleSelectOption as Option,
  Tooltip,
  Popover,
  Field,
  lightTheme,
  darkTheme,
  DesignSystemProvider,
  Button,
} from "@strapi/design-system";
import { Information } from "@strapi/icons";
import { HexColorPicker } from "react-colorful";
import { useSystemTheme } from "../hooks/use-system-theme";
import PaintIcon from "./icons/Paint";

const ColorPickerField = ({
  name,
  value,
  onChange,
  attribute,
  error,
  required,
}) => {
  const systemTheme = useSystemTheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;
  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";
  const colors = attribute?.options["colors"] ?? "[]";
  const useColorPalette = attribute?.options["color-palette"] ?? false;
  console.log(useColorPalette);

  const Options = JSON.parse(colors);
  const [showPopover, setShowPopover] = useState(false);

  const colorOptions =
    Options.includes(value) || !value ? Options : [...Options, value];

  const handleColorPick = (hex) => {
    onChange({ target: { name, value: hex, type: "string" } });
    setShowPopover(false);
  };

  useEffect(() => {
    const saveColorsIfFirstTime = async () => {
      const colorList = Array.isArray(Options) ? Options : [];

      if (colorList.length === 0) return;

      try {
        const existing = await fetch("/superfields/colors", {
          method: "GET",
        }).then((res) => res.json());
        console.log("existing", existing);

        if (!existing.data) {
          for (const hex of colorList) {
            await fetch("/superfields/colors", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ data: { hex } }),
            });
          }
        }
      } catch (err) {
        console.error("Error saving colors from options:", err);
      }
    };

    saveColorsIfFirstTime();
  }, []);

  const labelAction = tooltipContent && (
    <DesignSystemProvider theme={theme}>
      <Tooltip label={tooltipContent}>
        <Information
          aria-hidden
          style={{
            cursor: "pointer",
            color: systemTheme === "dark" ? "#fff" : "#000",
          }}
        />
      </Tooltip>
    </DesignSystemProvider>
  );

  return (
    <div style={{ position: "relative" }}>
      <Field.Root id={name} hint={description} error={error}>
        <Field.Label style={{ marginBottom: "5px" }}>{name}</Field.Label>
        <Select
          value={value}
          label={name}
          required={required}
          onChange={(val) =>
            onChange({ target: { name, value: val, type: "string" } })
          }
          startIcon={labelAction}
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

        <Field.Error />
        <Field.Hint />
      </Field.Root>

      {useColorPalette && (
        <Popover.Root
          spacing={4}
          open={showPopover}
        >
          <Popover.Trigger>
            <div
              style={{ position: "absolute", top: 35, right: 40, zIndex: 10 }}
            >
              <PaintIcon
                fill={systemTheme === "dark" ? "#fff" : "#000"}
                width="1.5rem"
                height="1.5rem"
                style={{ cursor: "pointer" }}
                title="Pick a color"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowPopover((prev) => !prev);
                }}
              />
            </div>
          </Popover.Trigger>

          <Popover.Content>
            <div
              style={{
                padding: 12,
                backgroundColor: systemTheme === "dark" ? "#2C2C2C" : "#fff",
              }}
            >
              <HexColorPicker
                color={value || "#000000"}
                onChange={handleColorPick}
              />
              <div
                style={{
                  marginTop: 8,
                  color: systemTheme === "dark" ? "#fff" : "#000",
                }}
              >
                <strong>Picked:</strong>
                {value}
              </div>
            </div>
          </Popover.Content>
        </Popover.Root>
      )}
    </div>
  );
};

export default ColorPickerField;
