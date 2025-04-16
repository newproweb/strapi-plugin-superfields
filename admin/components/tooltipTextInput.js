import React from "react";
import {
  TextInput,
  Tooltip,
} from "@strapi/design-system";
import { Information } from "@strapi/icons";
import { useIntl } from "react-intl";

const TextInputComponent = ({
  onChange,
  name,
  value,
  intlLabel,
  attribute,
  error,
  required,
}) => {
  const { formatMessage } = useIntl();
  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";

  return (
    <TextInput
      onChange={(e) => onChange({ target: { name, value: e.target.value } })}
      value={value ?? ""}
      id={name}
      error={error}
      label={formatMessage(intlLabel)}
      name={formatMessage(intlLabel)}
      required={required}
      {...(!!description ? { hint: description } : {})}
      {...(!!tooltipContent
        ? {
            labelAction: (
                <Tooltip
                  description={attribute?.options["tooltip-content"] ?? ""}
                >
                  <Information aria-hidden />
                </Tooltip>
            ),
          }
        : {})}
    />
  );
};

export default TextInputComponent;
