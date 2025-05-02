const colorPickerController = ({ strapi }) => ({
  async create(ctx) {
    const { data } = ctx.request.body;
    const result = await strapi
      .plugin('superfields')
      .service('color-picker')
      .createColor(data);
    ctx.send(result);
  },

  async find(ctx) {
    const colors = await strapi
      .plugin('superfields')
      .service('color-picker')
      .getAllColors();
    ctx.send(colors);
  },
});

module.exports = colorPickerController;