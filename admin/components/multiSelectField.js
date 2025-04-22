import React, { useState } from 'react';
import {
 MultiSelectNested,
  Tooltip,
} from '@strapi/design-system';                                 
import { Information } from '@strapi/icons';
import { useIntl } from 'react-intl';
import { renderSelect } from '../helpers';

const MultiSelectField = ({
  name,
  value,
  onChange,
  attribute,
  error,
  required,
  intlLabel,
}) => {

    const { formatMessage } = useIntl();

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
    <Tooltip description={tooltipContent}>
      <Information aria-hidden />
    </Tooltip>
  );


  return (
    <>

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
            label={formatMessage(intlLabel)}
            labelAction={labelAction}
            withTags={true}

          />
        ) : (
          // fallback to flat selects (SingleSelect / MultiSelect / Combobox)
          renderSelect(
            { name, value: selected, onChange: handleChange, hint: description, required, error , id:name, label:formatMessage(intlLabel), withTags:true },
            selectType,
            options,
            tooltipContent
          )
        )}

    </>
  );
}

export default MultiSelectField;
