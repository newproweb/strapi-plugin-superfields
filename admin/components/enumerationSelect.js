import React from "react";
import {
  SingleSelect as Select,
  SingleSelectOption as Option,
  Tooltip,
} from "@strapi/design-system";
import { useIntl } from "react-intl";
import { Information } from "@strapi/icons";

const CustomEnumField = ({
  name,
  value,
  onChange,
  attribute,
  error,
  required,
  intlLabel,
}) => {
  const { formatMessage } = useIntl();

  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";

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
        ) : '   (No tooltip message)'
      }
    >
      {normalizedOptions.map((opt, idx) => (
        <Option key={idx} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default CustomEnumField;
