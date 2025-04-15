import React from "react";
import { TextInput, Tooltip, Field } from "@strapi/design-system";
import { Information } from "@strapi/icons";

const TextInputComponent = ({
  onChange,
  name,
  value,
  attribute,
  error,
  required,
}) => {
  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";

  return (
    <>
      <Field.Root id={name} error={error} hint={description}>
        <Field.Label style={{ marginBottom: "5px" }}>{name}</Field.Label>

        <TextInput
          onChange={(e) =>
            onChange({ target: { name, value: e.target.value } })
          }
          value={value ?? ""}
          id={name}
          error={error}
          name={name}
          required={required}
          endAction={
            <Tooltip label={tooltipContent ?? ""}>
              <Information
                aria-hidden
                style={{ zIndex: 99999, cursor: "pointer" }}
              />
            </Tooltip>
          }
        />
        <Field.Error />
        <Field.Hint />
      </Field.Root>
    </>
  );
};

export default TextInputComponent;
