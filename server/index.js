"use strict";

const register = require("./register");
const routes = require('./routes')
const controllers  = require('./controllers')
const services = require('./services')
const contentTypes = require('./content-types')


module.exports = {
  register,
  contentTypes,
  routes,
  controllers,
  services
};
