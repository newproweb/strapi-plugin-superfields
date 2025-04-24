

import CalendarIcon from "../../components/icons/calendarIcon";

export default {
  name: "tooltip-datetime-field",
  pluginId: "superfields",
  type: "date",
  icon: CalendarIcon,
  components: { Input: async () => import("../../components/dateTimePicker") },
  intlLabel: {
    id: "superfields.datetime-input.label",
    defaultMessage: "Tooltip Date Time",
  },
  intlDescription: {
    id: "superfields.datetime-input.description",
    defaultMessage: "Text input with tooltip information",
  },
  options: {
    base: [
     
      {
        name: "options.tooltip-content",
        description: "The content to show in the tooltip",
        type: "textarea",
        intlLabel: {
          id: "superfields.datetime-input.options.tooltip-content.label",
          defaultMessage: "Tooltip message content",
        },
      },
      {
        name: "options.description",
        description: "The content to show under the field",
        type: "textarea",
        intlLabel: {
          id: "superfields.datetime-input.options.description.label",
          defaultMessage: "Field Description",
        },
      },
    ],
    advanced: [
      {
        sectionTitle: {
          id: "global.settings",
          defaultMessage: "Settings",
        },
        items: [
          {
            name: "default",
            type: "datetime",
            intlLabel: {
              id: "superfields.datetime-input.options.default.label",
              defaultMessage: "Default Value",
            },
          },
      
   
          {
            name: "private",
            type: "checkbox",
            intlLabel: {
              id: "superfields.datetime-input.options.private.label",
              defaultMessage: "Private field",
            },
          },
          {
            name: "required",
            type: "checkbox",
            intlLabel: {
              id: "superfields.datetime-input.options.required.label",
              defaultMessage: "Required Field",
            },
          },
          {
            name: "unique",
            type: "checkbox",
            intlLabel: {
              id: "superfields.datetime-input.options.unique.label",
              defaultMessage: "Unique Field",
            },
          },
         
        ],
      },
    ],
  },
};