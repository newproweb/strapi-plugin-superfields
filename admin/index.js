"use strict";
import fields from "./fields";


export default {
  register(app) {
    for (const field of fields) {
      app.customFields.register(field);
    }
    }
};
