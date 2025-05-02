"use strict";

const pluginPkg = require('../../package.json');

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: pluginPkg.name,
    plugin: pluginPkg.strapi.name,
    type: "string",
  });

  strapi.customFields.register({
    name:'tooltip-field',
    plugin: pluginPkg.strapi.name,
    type: "string",
  })

  strapi.customFields.register({
    name:'tooltip-number-field',
    plugin: 'superfields',
    type: "integer",
  })


  strapi.customFields.register({
    name:'tooltip-boolean-field',
    plugin: 'superfields',
    type: "boolean",
  })


  strapi.customFields.register({
    name:'tooltip-enum-field',
    plugin: 'superfields',
    type: "string",
  })

  strapi.customFields.register({
    name:'multi-select',
    plugin: 'superfields',
    type: "string",
  })


  strapi.customFields.register({
    name:'tooltip-datetime-field',
    plugin: 'superfields',
    type: "date",
  })


  strapi.customFields.register({
    name:'tooltip-color-picker',
    plugin: 'superfields',
    type: "string",
  })
};
