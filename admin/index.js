"use strict";
import fields from "./fields/index.js";

export default {
  register(strapi) {
    for (const field of fields) {
      strapi.customFields.register(field);
    }
  },
};
