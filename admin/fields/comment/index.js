import { Discuss } from "@strapi/icons";
import pluginPk from "../../../package.json";

export default {
  name: pluginPk.name,
  pluginId: pluginPk.strapi.name,
  type: "string",
  icon: Discuss,
  intlLabel: {
    id:`${pluginPk.strapi.name}.${pluginPk.name}.field.label`,
    defaultMessage: "Comment"
  },
  intlDescription: {
    id: `${pluginPk.strapi.name}.${pluginPk.name}.field.description`,
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
          id: `${pluginPk.strapi.name}.${pluginPk.name}.field.label`,
          defaultMessage: "Comment"
        }
      },
      {
        name: "options.variant",
        intlLabel: {
          id:  `${pluginPk.strapi.name}.${pluginPk.name}.field.variant.label`,
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
                id: `${pluginPk.strapi.name}.${pluginPk.name}.field.variant.option.success.label`,
                defaultMessage: "Success"
              }
            }
          },
          {
            key: "warning",
            value: "warning",
            metadatas: {
              intlLabel: {
                id: `${pluginPk.strapi.name}.${pluginPk.name}.field.variant.option.warning.label`,
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
                id: `${pluginPk.strapi.name}.${pluginPk.name}.field.variant.option.error.label`,
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
              id:`${pluginPk.strapi.name}.${pluginPk.name}.field.private.label`,
              defaultMessage: "Private Field",
            },
            intlDescription: {
              id: `${pluginPk.strapi.name}.${pluginPk.name}.field.private.description`,
              defaultMessage: "This field is shown up in API response",
            }
          }
        ]
      },
    ],
  },
  components: { Input: async () => import("../../components/comment") }

}
