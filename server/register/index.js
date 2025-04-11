"use strict";

const pluginPkg = require('../../package.json');

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: pluginPkg.name,
    plugin: pluginPkg.strapi.name,
    type: "string",
  });
};
