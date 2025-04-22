import React, { useState } from 'react';
import {
  DesignSystemProvider,
  Field,
 MultiSelectNested,
  Tooltip,
  darkTheme,
  lightTheme
} from '@strapi/design-system';                                 
import { Information } from '@strapi/icons';
import { renderSelect } from '../helpers';
import { useSystemTheme } from '../hooks/use-system-theme';

const MultiSelectField = ({
  name,
  value,
  onChange,
  attribute,
  error,
  required,
}) => {

  const systemTheme = useSystemTheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;

 
  const {
    'tooltip-content': tooltipContent = '',
    description = '',
    default: defaultValue = [],
    nestedOptions = '[]',
    selectType = 'multi',
    enumValues = '',
  } = attribute.options || {};

  // parse flat enumValues (for non-nested)
  const options =
  enumValues
    .map((item) => {
      const [label, val] = item?.split(":").map((s) => s.trim());
      return { label: label || val, value: val || label };
    });

  // parse nestedOptions only when needed
  let tree = [];
  if (selectType === 'nested') {
    try {
      tree = JSON.parse(nestedOptions);
    } catch (e) {
      console.warn('Invalid nestedOptions JSON', e);
      tree = [];
    }
  }

  // maintain selected values
  const [selected, setSelected] = useState(
    Array.isArray(value) && value.length ? value : defaultValue
  );

  const handleChange = (next) => {
    setSelected(next);
    // Strapi expects { target: { name, value, type } }
    onChange({ target: { name, value: next, type: 'string' } });
  };

  // build the tooltip icon
  const labelAction = tooltipContent && (
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
  );


  return (
    <Field.Root id={name} hint={description} error={error}>
      <Field.Label style={{ marginBottom: '5px' }} >{name}</Field.Label>

        {selectType === 'nested' ? (
          <MultiSelectNested
            id={name}
            name={name}
            value={selected}
            options={tree}
            onChange={handleChange}
            hint={description}
            error={error}
            required={required}
            clearLabel="Clear all selections"
            startIcon={labelAction}
            withTags={true}

          />
        ) : (
          // fallback to flat selects (SingleSelect / MultiSelect / Combobox)
          renderSelect(
            { name, value: selected, onChange: handleChange, hint: description, required, error , id:name, withTags:true, startIcon: labelAction },
            selectType,
            options,
            tooltipContent
          )
        )}

    </Field.Root>
  );
}

export default MultiSelectField;
