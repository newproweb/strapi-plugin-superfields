import React from "react";
import {
  SingleSelect,
  SingleSelectOption as Option,
  Tooltip,
  Field,
  lightTheme,
  darkTheme,
  DesignSystemProvider,
} from "@strapi/design-system";
import { Information } from "@strapi/icons";
import { useSystemTheme } from "../hooks/use-system-theme";

const CustomEnumField = React.forwardRef(({
  name,
  value,
  onChange,
  attribute,
  error,
  required,
}, ref) => {
  const systemTheme = useSystemTheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;

  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";
  const defaultValue = attribute?.options["default"] ?? "";


  let lines = [];
  if (attribute.options?.enumValues) {
    lines = attribute.options.enumValues
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  const normalizedOptions = lines.map((item) => ({
    value: item,
    label: item,
  }));



  return (
    <Field.Root id={name} hint={description} error={error} ref={ref}>
      <Field.Label style={{ marginBottom: "5px" }}>{name}</Field.Label>

      <SingleSelect
        name={name}
        error={error}
        value={value}
        required={required}
        defaultValue={defaultValue}
        onChange={(val) =>
          onChange({ target: { name, value: val, type: "string" } })
        }
        startIcon={
            <DesignSystemProvider theme={theme}>
              <Tooltip label={tooltipContent ?? ""}>
                <Information
                  aria-hidden
                  style={{
                    cursor: "pointer",
                    color: systemTheme === "dark" ? "#fff" : "#000",
                  }}
                />
              </Tooltip>
            </DesignSystemProvider>
        }
      >
        {normalizedOptions.map((opt, idx) => (
          <Option key={idx} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </SingleSelect>

      <Field.Error />
      <Field.Hint />
    </Field.Root>
  );
});

export default CustomEnumField;
