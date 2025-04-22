import {
  SingleSelect,
  SingleSelectOption,
  MultiSelect,
  MultiSelectOption,
  Combobox,
  ComboboxOption,
  Tooltip,
} from "@strapi/design-system";
import { Information } from "@strapi/icons";

// Shared labelAction for all types
const createLabelAction = (tooltipContent) =>
  tooltipContent ? (
    <Tooltip description={tooltipContent}>
      <Information aria-hidden />
    </Tooltip>
  ) : null;

export const renderSelect = (sharedProps, selectType, options, tooltipContent) => {
  const labelAction = createLabelAction(tooltipContent);
  const commonProps = { ...sharedProps, labelAction };
  console.log(options, "options");
  switch (selectType) {
    case "single":
      return (
        <SingleSelect {...commonProps}>
          {options.map((opt, i) => (
            <SingleSelectOption key={i} value={opt.value}>
              {opt.label}
            </SingleSelectOption>
          ))}
        </SingleSelect>
      );

    case "multi":
      return (
        <MultiSelect {...commonProps}>
          {options.map((opt, i) => (
            <MultiSelectOption key={i} value={opt.value}>
              {opt.label}
            </MultiSelectOption>
          ))}
        </MultiSelect>
      );

    case "combobox":
      return (
        <Combobox {...commonProps}>
          {options.map((opt, i) => (
            <ComboboxOption key={i} value={opt.value}>
              {opt.label}
            </ComboboxOption>
          ))}
        </Combobox>
      );

    case "nested":
      // Placeholder: actual nested UI is built in the main component
      return null;

    default:
      return null;
  }
};
