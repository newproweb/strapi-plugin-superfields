"use strict";
import fields from "./fields";

export default {
  register(strapi) {
    strapi.customFields.register(fields);
  },
};
