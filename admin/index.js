"use strict";
import fields from "./fields";
import { injectColorPickerButton } from './helpers/extend/inject-color-autofill'

export default {
  register(app) {
    for (const field of fields) {
      app.customFields.register(field);
    }
  },


  bootstrap(app) {
    injectColorPickerButton();
  },
};
