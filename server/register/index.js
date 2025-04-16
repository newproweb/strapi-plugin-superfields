"use strict";


module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "comment",
    plugin: "superfields",
    type: "text",
  });
  strapi.customFields.register({
    name:'tooltip-field',
    plugin: 'superfields',
    type: "text",
  })
  strapi.customFields.register({
    name:'tooltip-number-field',
    plugin: 'superfields',
    type: "integer",
  })

};
