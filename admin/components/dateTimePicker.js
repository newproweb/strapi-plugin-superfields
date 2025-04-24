import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled, { useTheme } from 'styled-components';
import { Box,  Flex, Tooltip, Typography } from '@strapi/design-system';
import CalendarIcon from './icons/calendarIcon';
import { Information } from "@strapi/icons";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: ${({ theme }) => theme.spaces[3]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.neutral800};
  background-color: ${({ theme }) => theme.colors.neutral0};
  height: ${({ theme }) => theme.sizes?.input?.M || '40px'};

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral600};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary600};
    box-shadow: ${({ theme }) => theme.shadows.focusShadow};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral150};
    color: ${({ theme }) => theme.colors.neutral600};
    cursor: not-allowed;
  }
`;

const DateTimePicker = ({ name, value, onChange, attribute, error, required }) => {
  const theme = useTheme();
  const defaultValue = attribute?.options?.["default"] ?? "";
  const tooltipContent = attribute?.options?.["tooltip-content"] ?? "";
  const description = attribute?.options?.["description"] ?? "";

  const [selectedDate, setSelectedDate] = useState(value || defaultValue || null);

  useEffect(() => {
    if (selectedDate) {
      onChange({ target: { name, value: selectedDate } });
    } else if (!required) {
      onChange({ target: { name, value: null } });
    }
  }, [selectedDate]);

  return (
    <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: theme.spaces[2] }}>
      <Flex alignItems="center" gap={1} style={{ marginBottom: "5px" }}>
        <Typography>{name}</Typography>
        {tooltipContent && (
          <Tooltip label={tooltipContent}>
            <Information aria-hidden style={{ cursor: "pointer" }} />
          </Tooltip>
        )}
      </Flex>

      <StyledDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        showIcon
        icon={<CalendarIcon style={{ width: '15px', height: '15px', marginTop: '5px' }} />}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Choose a date and time"
        isClearable={!required}
      />

      {description && <Typography>{description}</Typography>}

      {error && (
        <Typography variant="pi" textColor="danger600">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default DateTimePicker;
