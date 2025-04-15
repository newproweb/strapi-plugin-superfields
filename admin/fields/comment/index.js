import { Discuss } from "@strapi/icons";

export default {
  name: "comment",
  pluginId: "superfields",
  type: "text",
  icon: Discuss,
  components: { Input: async () => import("../../components/comment.js") },
  intlLabel: {
    id: "superfields.field.comment.label",
    defaultMessage: "Comment"
  },
  intlDescription: {
    id: "superfields.field.comment.description",
    defaultMessage: "Simple comment without any input. User as private field, and only in admin itself"
  },
  options: {
    base: [
      {
        name: "options.comment",
        description: "The comment",
        defaultValue: "",
        type: "textarea",
        intlLabel: {
          id: "superfields.field.comment.comment.label",
          defaultMessage: "Comment"
        }
      },
      {
        name: "options.variant",
        intlLabel: {
          id: "superfields.field.comment.variant.label",
          defaultMessage: "Color variant"
        },
        type: "select",
        value: "success",
        defaultValue: "success",
        options: [
          {
            key: "success",
            value: "success",
            metadatas: {
              intlLabel: {
                id: "superfields.field.comment.variant.option.success.label",
                defaultMessage: "Success"
              }
            }
          },
          {
            key: "warning",
            value: "warning",
            metadatas: {
              intlLabel: {
                id: "superfields.field.comment.variant.option.warning.label",
                defaultMessage: "Warning"
              }
            }
          },
          {
            key: "error",
            defaultValue: "error",
            value: "error",
            metadatas: {
              intlLabel: {
                id: "superfields.field.comment.variant.option.error.label",
                defaultMessage: "Error"
              }
            }
          }
        ],
      },
    ],
    advanced: [
      {
        sectionTitle: {
          id: 'global.settings',
          defaultMessage: 'Settings' 
        },
        items: [
          {
            name: "private",
            type: "checkbox",
            defaultValue: true,
            disabled: true,
            intlLabel: {
              id: "superfields.field.comment.private.label",
              defaultMessage: "Private Field",
            },
            intlDescription: {
              id: "superfields.field.comment.private.description",
              defaultMessage: "This field is shown up in API response",
            }
          }
        ]
      },
    ],
  }
}
