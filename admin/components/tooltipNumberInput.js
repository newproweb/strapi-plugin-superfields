import React from "react";
import {
  NumberInput,
  Tooltip,
} from "@strapi/design-system";
import { Information } from "@strapi/icons";
import { useIntl } from "react-intl";

const NumberInputComponent = ({
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
    <NumberInput
      onValueChange={(value) => onChange({ target: { name, value } })}
      value={value ?? ""}
      id={name}
      error={error}
      label={formatMessage(intlLabel)}
      name={name}
      required={required}
      hint={description}
      labelAction={
        tooltipContent && (
            <Tooltip description={tooltipContent}>
              <Information aria-hidden />
            </Tooltip>
        )
      }
    />
  );
};

export default NumberInputComponent;
