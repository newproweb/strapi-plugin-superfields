"use strict";
import { injectColorPickerButton } from "./extend/inject-color-autofill.js";
import fields from "./fields/index.js";

export default {
  register(strapi) {
    for (const field of fields) {
      strapi.customFields.register(field);
    }
  },

  bootstrap(app) {
    injectColorPickerButton();
  },
};
