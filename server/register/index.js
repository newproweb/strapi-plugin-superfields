"use strict";

const pluginPkg = require('../../package.json');

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "comment",
    plugin: pluginPkg.strapi.name,
    type: "text",
  });
};
