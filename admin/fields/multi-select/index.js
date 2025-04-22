import { List } from "@strapi/icons";

export default {
  name: "multi-select",
  pluginId: "superfields",
  type: "string",
  intlLabel: {
    id: "superfields.multi-select.label",
    defaultMessage: "Multiple Select",
  },
  intlDescription: {
    id: "superfields.multi-select.description",
    defaultMessage: "Select multiple options",
  },
  icon: List,
  components: {
    Input: async () => import("../../components/multiSelectField"),
  },

  options: {
    base: [
      // 1) Standard enum textarea, shown when selectType ≠ 'nested'
      {
        name: "options.enumValues",
        type: "textarea-enum",
        intlLabel: {
          id: "superfields.multi-select.options.enumValues.label",
          defaultMessage: "Options (one per line)",
        },
        placeholder: {
          id: "superfields.multi-select.options.enumValues.placeholder",
          defaultMessage: "Ex:\nOption 1\nOption 2\nOption 3:option-3",
        },
        condition: {
          // Only show when selectType is not nested
          field: "options.selectType",
          operator: "!=",
          value: "nested",
        },
      },
      // 2) Select type dropdown
      {
        name: "options.selectType",
        type: "select",
        defaultValue: "multi",
        intlLabel: {
          id: "superfields.multi-select.selectType.label",
          defaultMessage: "Select Type",
        },
        options: [
          { value: "single", metadatas: { intlLabel: { id: "...option.single.label", defaultMessage: "Single Select" }}},
          { value: "multi",  metadatas: { intlLabel: { id: "...option.multi.label",  defaultMessage: "Multi Select"  }}},
          { value: "combobox", metadatas: { intlLabel: { id: "...option.combobox.label", defaultMessage: "Combobox" }}},
          { value: "nested", metadatas: { intlLabel: { id: "...option.nested.label", defaultMessage: "Nested Multi Select" }}},
        ],
      },
      // 3) Nested JSON editor, shown only when selectType === 'nested'
      {
        name: "options.nestedOptions",
        type: "json",
        defaultValue: JSON.stringify([
          { label: "Group 1", value: "group1", children: [
              { label: "Option A", value: "optA" },
              { label: "Option B", value: "optB" },
            ]
          },
          { label: "Group 2", value: "group2" },
        ], null, 2),
        intlLabel: {
          id: "superfields.multi-select.options.nestedOptions.label",
          defaultMessage: "Nested Options (JSON)",
        },
        description: {
          id: "superfields.multi-select.options.nestedOptions.description",
          defaultMessage:
            "Enter JSON array of nodes with optional `children` arrays.\nE.g.: [{label:'Group',value:'grp',children:[…]}]",
        },
        condition: {
          // Only show when selectType is nested
          field: "options.selectType",
          operator: "==",
          value: "nested",
        },
      },
      // 4) Tooltip and description always available
      {
        name: "options.tooltip-content",
        type: "string",
        intlLabel: {
          id: "superfields.multi-select.tooltipContent.label",
          defaultMessage: "Tooltip Content",
        },
      },
      {
        name: "options.description",
        type: "textarea",
        intlLabel: {
          id: "superfields.multi-select.description.label",
          defaultMessage: "Description",
        },
      },
    ],
    advanced: [
      {
        sectionTitle: { id: "global.settings", defaultMessage: "Settings" },
        items: [
          { name: "required", type: "checkbox", intlLabel: { id: "...settings.required", defaultMessage: "Required field" }},
          { name: "private",  type: "checkbox", intlLabel: { id: "...settings.private", defaultMessage: "Private field" }},
          { name: "min",      type: "number",   intlLabel: { id: "...settings.min", defaultMessage: "Minimum items" }},
          { name: "max",      type: "number",   intlLabel: { id: "...settings.max", defaultMessage: "Maximum items" }},
        ],
      },
    ],

  },
};
