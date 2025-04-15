import { RichText } from "@strapi/icons";

export default {
  name: "tooltip-field",
  pluginId: "superfields",
  type: "text",
  icon: RichText,
  components: { Input: async () => import("../../components/tooltip.js") },
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
        name: "options.tooltip-content",
        description: "The content to show in the tooltip",
        type: "textarea",
        intlLabel: {
          id: "superfields.text-input.options.tooltip-content.label",
          defaultMessage: "Tooltip message content",
        },
      },
      {
        name: "options.description",
        description: "The content to show under the field",
        type: "textarea",
        intlLabel: {
          id: "superfields.text-input.options.description.label",
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
            type: "text",
            intlLabel: {
              id: "superfields.text-input.options.default.label",
              defaultMessage: "Default Value",
            },
          },
          {
            name: "regex",
            type: "text",
            intlLabel: {
              id: "superfields.text-input.options.regex.label",
              defaultMessage: "Validation Regex",
            },
          },
          {
            name: "maxLength",
            type: "number",
            intlLabel: {
              id: "superfields.text-input.options.maxLength.label",
              defaultMessage: "Maximum Length",
            },
          },
          {
            name: "minLength",
            type: "number",
            intlLabel: {
              id: "superfields.text-input.options.minLength.label",
              defaultMessage: "Minimum Length",
            },
          },
          {
            name: "private",
            type: "checkbox",
            intlLabel: {
              id: "superfields.text-input.options.private.label",
              defaultMessage: "Private field",
            },
          },
          {
            name: "required",
            type: "checkbox",
            intlLabel: {
              id: "superfields.text-input.options.required.label",
              defaultMessage: "Required Field",
            },
          },
          {
            name: "unique",
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