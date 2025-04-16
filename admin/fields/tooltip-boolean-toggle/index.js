import BooleanIcon from "../../components/icons/Boolean";
export default {
  name: "tooltip-boolean-field",
  pluginId: "superfields",
  type: "boolean",
  icon: BooleanIcon,
  components: { Input: async () => import("../../components/tooltipBooleanToggle") },
  intlLabel: {
    id: "superfields.boolean-input.label",
    defaultMessage: "Tooltip boolean input",
  },
  intlDescription: {
    id: "superfields.boolean-input.description",
    defaultMessage: "Boolean input with tooltip information",
  },
  options: {
    base: [
      {
        name: "options.tooltip-content",
        type: "textarea",
        intlLabel: {
          id: "superfields.boolean-input.options.tooltip-content.label",
          defaultMessage: "Tooltip message content",
        },
      },
      {
        name: "options.description",
        type: "textarea",
        intlLabel: {
          id: "superfields.boolean-input.options.description.label",
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
            name: "options.default",
            type: "select",
            value:false,
            defaultValue: false,
            options: [
              {
                key: true,
                value: true,
                metadatas: {
                  intlLabel: {
                    id: `superfields.boolean-input.options.default.option.true.label`,
                    defaultMessage: "true",
                  }
                }
              },
              {
                key: false,
                value: false,
                metadatas: {
                  intlLabel: {
                    id: `superfields.boolean-input.options.default.option.false.label`,
                    defaultMessage: "false",
                  }
                }
              },
              {
                key: 'null',
                value: 'null',
                metadatas: {
                  intlLabel: {
                    id: `superfields.boolean-input.options.default.option.null.label`,
                    defaultMessage: "null",
                  }
                }
              },
            ],
            intlLabel: {
              id: "superfields.boolean-input.options.default.label",
              defaultMessage: "Default Value",
            },

          },
          {
            name: "options.private",
            type: "checkbox",
            intlLabel: {
              id: "superfields.boolean-input.options.private.label",
              defaultMessage: "Private field",
            },
          },
          {
            name: "options.required",
            type: "checkbox",
            intlLabel: {
              id: "superfields.boolean-input.options.required.label",
              defaultMessage: "Required Field",
            },
          },
          {
            name: "options.unique",
            type: "checkbox",
            intlLabel: {
              id: "superfields.boolean-input.options.unique.label",
              defaultMessage: "Unique Field",
            },
          },
        ],
      },
    ],
  },
};
