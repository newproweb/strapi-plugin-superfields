import React from "react";
import {
  DesignSystemProvider,
  Tooltip,
  Field,
  NumberInput,
  lightTheme,
  darkTheme
} from "@strapi/design-system";
import { Information } from "@strapi/icons";
import {useSystemTheme} from '../hooks/use-system-theme'



const TooltipNumberInput = ({
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
  const theme = systemTheme === 'dark' ? darkTheme : lightTheme;



  return (
    <Field.Root id={name} error={error} hint={description}>
    <Field.Label style={{ marginBottom: "5px" }}>{name}</Field.Label>

    <NumberInput
      onValueChange={(value) => onChange({ target: { name, value } })}
      value={value ?? ""}
      id={name}
      error={error}
      name={name}
      required={required}
      startAction={
        tooltipContent ? (
          <DesignSystemProvider theme={theme}>
            <Tooltip label={tooltipContent ?? ""}  >
              <Information
                aria-hidden
                style={{ cursor: "pointer" , color: systemTheme === 'dark' ? '#fff' : '#000'}}
              />
            </Tooltip>
          </DesignSystemProvider>
        ) : null
      }
    />
    <Field.Error />
    <Field.Hint />
  </Field.Root>
  );
};

export default TooltipNumberInput;
