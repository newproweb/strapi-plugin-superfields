"use strict";
import fields from "./fields";


export default {
  register(app) {
    app.customFields.register(fields);
  },
};
