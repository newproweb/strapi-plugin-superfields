import * as yup from "yup";
import EnumurationIcon from '../../components/icons/EnumurationIcon'


export default {
  name: "tooltip-enum-field",
  pluginId: "superfields",
  type: "string",
  icon: EnumurationIcon,
  intlLabel: {
    id: "superfields.tooltip-enum-field.label",
    defaultMessage: "Tooltip Enum field",
  },
  intlDescription: {
    id: "superfields.tooltip-enum-field.description",
    defaultMessage: "Enum field with tooltip support",
  },
  components: {
    Input: async () => import("../../components/enumerationSelect"),
  },

  options: {
    base: [
      {
        name: "options.tooltip-content",
        description: "The content to show in the tooltip",
        type: "textarea",
        intlLabel: {
          id: "superfields.tooltip-enum-field.options.tooltip-content.label",
          defaultMessage: "Tooltip message content",
        },
      },
      {
        name: "options.enumValues",
        type: "textarea",
        intlLabel: {
          id: "superfields.tooltip-enum-field.enumValues.label",
          defaultMessage: "Enum Values (one per line)",
        },
        description:
          "Enter each enum value on a separate line. For example: Draft [line break] Published [line break] Archived",
      },
      {
        name: "options.description",
        type: "textarea",
        intlLabel: {
          id: "superfields.tooltip-enum-field.description.label",
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
            type: "string",
            intlLabel: {
              id: "superfields.tooltip-enum-field.default.label",
              defaultMessage: "Default Value",
            },
          },

          {
            name: "options.private",
            type: "checkbox",
            intlLabel: {
              id: "superfields.tooltip-enum-field.private.label",
              defaultMessage: "Private Field",
            },
          },
          {
            name: "options.required",
            type: "checkbox",
            intlLabel: {
              id: "superfields.tooltip-enum-field.required.label",
              defaultMessage: "Required Field",
            },
          },
          {
            name: "options.unique",
            type: "checkbox",
            intlLabel: {
              id: "superfields.tooltip-enum-field.unique.label",
              defaultMessage: "Unique Field",
            },
          },
        ],
      },
    ],
    validator: (args) => {
      return {
        enumValues: yup
          .string()
          .required({
            id: "superfields.tooltip-enum-field.enumValues.error",
            defaultMessage: "Enum values are required",
          })
          .test({
            name: "unique",
            message: {
              id: "superfields.tooltip-enum-field.enumValues.unique",
              defaultMessage: "Enum values must be unique",
            },
            test: (v) => {
              if (!v) return true;
              const items = v
                .split(/\r?\n/)
                .map((l) => l.trim())
                .filter(Boolean);
              return new Set(items).size === items.length;
            },
          }),
        default: yup.string().test({
          name: "isValidEnum",
          message: {
            id: "superfields.tooltip-enum-field.default.invalid",
            defaultMessage: "Default value must be one of the enum values",
          },
          test: function (defaultValue) {
            if (!defaultValue) return true; 

            const enumValues = this.parent.enumValues;
            if (!enumValues) return true; 

            const items = enumValues
              .split(/\r?\n/)
              .map((l) => l.trim())
              .filter(Boolean);

            return items.includes(defaultValue);
          },
        }),
      };
    },
  },
};
