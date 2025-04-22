import React from "react";
import {
  Toggle,
  Tooltip,
  Field,
  Flex,
  DesignSystemProvider,
  lightTheme,
  darkTheme,
} from "@strapi/design-system";
import { Information } from "@strapi/icons";
import { useSystemTheme } from "../hooks/use-system-theme";

const TooltipBooleanInput = ({
  name,
  value,
  onChange,
  attribute,
  error,
  required,
}) => {
  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";

  const systemTheme = useSystemTheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;

  return (
    <Field.Root id={name} error={error} hint={description}>
      <Flex alignItems="center" gap={1} style={{ marginBottom: "5px" }}>
      <Field.Label>{name}</Field.Label>

        {tooltipContent && (
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
        )}
      </Flex>

      <Toggle
        name={name}
        checked={value}
        onChange={(e) =>
          onChange({ target: { name, value: e.target.checked } })
        }
        onLabel="True"
        offLabel="False"
        required={required}
        error={error}
      />

      <Field.Error />
      <Field.Hint />
    </Field.Root>
  );
};

export default TooltipBooleanInput;
