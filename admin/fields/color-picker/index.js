
import * as yup from "yup";
import DiscourseIcon from "../../components/icons/Discourse.jsx";

export default {
  name: "tooltip-color-picker",
  pluginId: "superfields",
  type: "string",
  icon: DiscourseIcon ,
  intlLabel: {
    id: "superfields.tooltip-color-picker.label",
    defaultMessage: "Tooltip Color Picker",
  },
  intlDescription: {
    id: "superfields.tooltip-color-picker.description",
    defaultMessage: "Color picker with tooltip",
  },
  components: {
    Input: async () => import("../../components/colorPicker.jsx"),
  },

  options: {
    base: [
      {
        name: "options.tooltip-content",
        description: "The content to show in the tooltip",
        type: "textarea",
        intlLabel: {
          id: "superfields.tooltip-color-picker.options.tooltip-content.label",
          defaultMessage: "Tooltip message content",
        },
      },
      {
        name: "options.colors",
        type: "json",
        intlLabel: {
          id: "superfields.tooltip-color-picker.colors.label",
          defaultMessage: "Add Colors like ['color1', 'color2', 'color3', ...]",
        },
        description:
          "Add colors like ['color1', 'color2', 'color3', ...]",
        placehoolder: 'example:  ["#a9cce3", "#52be80", "#52be80", "#34495e","#0e6655" ,"#cb4335", "#138d75", "#f0f3f4", "#922b21", "#6c3483"]',
      },
      {
        name:"options.color-palette",
        type:"checkbox",
        intlLabel: {
            id: "superfields.tooltip-color-picker.color-palette.label",
            defaultMessage: "Use color palette",
        }
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
              id: "superfields.tooltip-color-picker.default.label",
              defaultMessage: "Default Value",
            },
          },

          {
            name: "options.private",
            type: "checkbox",
            intlLabel: {
              id: "superfields.tooltip-color-picker.private.label",
              defaultMessage: "Private Field",
            },
          },
          {
            name: "options.required",
            type: "checkbox",
            intlLabel: {
              id: "superfields.tooltip-color-picker.required.label",
              defaultMessage: "Required Field",
            },
          },
          {
            name: "options.unique",
            type: "checkbox",
            intlLabel: {
              id: "superfields.tooltip-color-picker.unique.label",
              defaultMessage: "Unique Field",
            },
          },
        ],
      },
    ],
    validator: (args) => {
      return {
        colors: yup
          .array()
          .of(yup.string().matches(/^#([0-9A-F]{3}){1,2}$/i, "Must be a valid hex color"))
          .min(1, {
            id: "superfields.tooltip-color-picker.colors.required",
            defaultMessage: "At least one color must be provided",
          })
          .required({
            id: "superfields.tooltip-color-picker.colors.required",
            defaultMessage: "Colors are required",
          }),
    
        "color-palette": yup.boolean(),
    
        "tooltip-content": yup.string().nullable(),
    
        default: yup.string().test({
          name: "isValidDefaultColor",
          message: {
            id: "superfields.tooltip-color-picker.default.invalid",
            defaultMessage: "Default color must be one of the provided colors",
          },
          test: function (defaultColor) {
            if (!defaultColor) return true;
            const colors = this.parent.colors;
            return Array.isArray(colors) && colors.includes(defaultColor);
          },
        }),
      };
    }
    
  },
};
