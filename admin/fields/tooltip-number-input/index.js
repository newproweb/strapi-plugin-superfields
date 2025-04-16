import NumberIcon from '../../components/icons/Number'
export default {
  name: "tooltip-number-field",
  pluginId: "superfields",
  type: "integer",
  icon: NumberIcon,
  components: { Input: async () => import("../../components/toltipNumberInput") },
  intlLabel: {
    id: "superfields.number-input.label",
    defaultMessage: "Tooltip number input",
  },
  intlDescription: {
    id: "superfields.number-input.description",
    defaultMessage: "Text input with tooltip information",
  },
  options: {
    base: [
      {
        name: "options.tooltip-content",
        description: "The content to show in the tooltip",
        type: "textarea",
        intlLabel: {
          id: "superfields.number-input.options.tooltip-content.label",
          defaultMessage: "Tooltip message content",
        },
      },
      {
        name: "options.description",
        description: "The content to show under the field",
        type: "textarea",
        intlLabel: {
          id: "superfields.number-input.options.description.label",
          defaultMessage: "Field Description",
        },
      },

      {
        name: "options.numberType",
        type: "select",
        value: "integer",
        defaultValue: "integer",
        intlLabel: {
          id: "superfields.number-input.options.numberType.label",
          defaultMessage: "Number format",
        },
        options: [
          {
            key: "integer",
            value: "Integer",
            metadatas: {
              intlLabel: {
                id: `superfields.number-input.options.numberType.option.integer.label`,
                defaultMessage: "Integer",
              }
            }
          },
          {
            key: "biginteger",
            value: "Big Integer",
            metadatas: {
              intlLabel: {
                id: `superfields.number-input.options.numberType.option.biginteger.label`,
                defaultMessage: "Big Integer",
              }
            }
          },
          {
            key: "float",
            value: "Float",
            metadatas: {
              intlLabel: {
                id: `superfields.number-input.options.numberType.option.float.label`,
                defaultMessage: "Float",
              }
            }

          },
          {
            key: "decimal",
            value: "Decimal",
            metadatas: {
              intlLabel: {
                id: `superfields.number-input.options.numberType.option.decimal.label`,
                defaultMessage: "Decimal",
              }
            }
          },
        ],

        description: "Choose the number format for the field",
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
            type: "number",
            intlLabel: {
              id: "superfields.number-input.options.default.label",
              defaultMessage: "Default Value",
            },
          },
          {
            name: "regex",
            type: "text",
            intlLabel: {
              id: "superfields.number-input.options.regex.label",
              defaultMessage: "Validation Regex",
            },
          },
          {
            name: "maxLength",
            type: "number",
            intlLabel: {
              id: "superfields.number-input.options.maxLength.label",
              defaultMessage: "Maximum Length",
            },
          },
          {
            name: "minLength",
            type: "number",
            intlLabel: {
              id: "superfields.number-input.options.minLength.label",
              defaultMessage: "Minimum Length",
            },
          },
          {
            name: "private",
            type: "checkbox",
            intlLabel: {
              id: "superfields.number-input.options.private.label",
              defaultMessage: "Private field",
            },
          },
          {
            name: "required",
            type: "checkbox",
            intlLabel: {
              id: "superfields.number-input.options.required.label",
              defaultMessage: "Required Field",
            },
          },
          {
            name: "unique",
            type: "checkbox",
            intlLabel: {
              id: "superfields.number-input.options.unique.label",
              defaultMessage: "Unique Field",
            },
          },
         
        ],
      },
    ],
  },
};