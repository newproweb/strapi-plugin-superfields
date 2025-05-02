import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Field, Flex, DesignSystemProvider, darkTheme, lightTheme, Tooltip } from "@strapi/design-system";
import CalendarIcon from "./icons/calendarIcon";
import { useSystemTheme } from "../hooks/use-system-theme";
import { Information } from "@strapi/icons";


const StyledDatePickerWrapper = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${({ theme }) => theme.spaces[2]};
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100% !important;
  padding: ${({ theme }) => theme.spaces[3]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.neutral800};
  background-color: ${({ theme }) => theme.colors.neutral0};
  height: ${({ theme }) => theme.sizes?.input?.M || "40px"};
`;

const DateTimePicker = ({ name, value, onChange,error,attribute,  required }) => {

  const tooltipContent = attribute?.options["tooltip-content"] ?? "";
  const description = attribute?.options["description"] ?? "";
  const defaultValue = attribute?.options["default"] ?? "";


    const systemTheme = useSystemTheme();
    const theme = systemTheme === "dark" ? darkTheme : lightTheme;
  
  



  const [selectedDate, setSelectedDate] = useState(value || defaultValue || null);

  useEffect(() => {
    if (selectedDate) {
      onChange({ target: { name, value: selectedDate } });
    } else if (!required) {
      onChange({ target: { name, value: null } });
    }
  }, [selectedDate]);



  return (
    <Field.Root id={name} error={error} hint={description}>

      <Flex alignItems="center" gap={1} style={{ marginBottom: "5px" }}>
      <Field.Label>{name}</Field.Label>

        {tooltipContent && (
          <DesignSystemProvider theme={theme}>
            <Tooltip label={tooltipContent}>
              <Information
                aria-hidden
                style={{
                  cursor: "pointer",
                  color: systemTheme === "dark" ? "#fff" : "#000",
                }}
              />
            </Tooltip>
          </DesignSystemProvider>
        )}
      </Flex>

      <StyledDatePickerWrapper>
        <StyledDatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          showIcon
          
          icon={
            <CalendarIcon
              style={{ width: "15px", height: "15px", marginTop: "5px" }}
            />
          }
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Chose a date and time"
          isClearable={!required}
          defaultValue={defaultValue}
        />
      </StyledDatePickerWrapper>
    </Field.Root>
  );
};

export default DateTimePicker;
