import React from "react";
import { ToggleInput, Tooltip } from "@strapi/design-system";
import { Information } from "@strapi/icons";
import { useIntl } from "react-intl";

const TooltipBooleanInput = ({
  name,
  value,
  onChange,
  intlLabel,
  attribute,
  error,
  required,
}) => {
  const { formatMessage } = useIntl();
  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";
  return (
    <ToggleInput
      name={name}
      label={formatMessage(intlLabel)}
      oneChange={(value) => onChange({ target: { name, value } })}
      checked={value}
      required={required}
      error={error}
      onLabel="True"
      offLabel="False"
      hint={description}
      labelAction={
        tooltipContent ? (
          <Tooltip description={tooltipContent}>
            <Information aria-hidden />
          </Tooltip>
        ) : null
      }
    />
  );
};

export default TooltipBooleanInput;
