import RichText from '../../components/icons/RichText'


export default {
  name: "tooltip-field",
  pluginId: "superfields",
  type: "string",
  icon: RichText,
  components: { Input: async () => import("../../components/tooltipTextInput") },
  intlLabel: {
    id: "superfields.text-input.label",
    defaultMessage: "Tooltip text input",
  },
  intlDescription: {
    id: "superfields.text-input.description",
    defaultMessage: "Text input with tooltip information",
  },
  
  options: {
    base: [
      {
        sectionTitle: {
          id: "superfields.text-input.section.tooltip",
          defaultMessage: "Tooltip Settings",
        },
        items: [
          {
            name: "options.tooltip-content",
            type: "textarea",
            intlLabel: {
              id: "superfields.text-input.options.tooltip-content.label",
              defaultMessage: "Tooltip message content",
            },
          },
          {
            name: "options.description",
            type: "textarea",
            intlLabel: {
              id: "superfields.text-input.options.description.label",
              defaultMessage: "Field Description",
            },
          },
        ],
      }
    ],
    advanced: [
      {
        sectionTitle: {
          id: "global.settings",
          defaultMessage: "Settings",
        },
        items: [
          {
            name: "options.default",
            type: "string",
            intlLabel: {
              id: "superfields.text-input.options.default.label",
              defaultMessage: "Default Value",
            },
          },
          {
            name: "options.regex",
            type: "string",
            intlLabel: {
              id: "superfields.text-input.options.regex.label",
              defaultMessage: "Validation Regex",
            },
          },
          {
            name: "options.maxLength",
            type: "number",
            intlLabel: {
              id: "superfields.text-input.options.maxLength.label",
              defaultMessage: "Maximum Length",
            },
          },
          {
            name: "options.minLength",
            type: "number",
            intlLabel: {
              id: "superfields.text-input.options.minLength.label",
              defaultMessage: "Minimum Length",
            },
          },
          {
            name: "options.private",
            type: "checkbox",
            intlLabel: {
              id: "superfields.text-input.options.private.label",
              defaultMessage: "Private field",
            },
          },
          {
            name: "options.required",
            type: "checkbox",
            intlLabel: {
              id: "superfields.text-input.options.required.label",
              defaultMessage: "Required Field",
            },
          },
          {
            name: "options.unique",
            type: "checkbox",
            intlLabel: {
              id: "superfields.text-input.options.unique.label",
              defaultMessage: "Unique Field",
            },
          },
        ],
      },
    ],
  
  },
};