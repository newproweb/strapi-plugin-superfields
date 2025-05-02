const colorPickerService = ({ strapi }) => ({
  async createColor(data) {
    const existing = await strapi.db.query('plugin::superfields.color').findOne({
      where: { hex: data.hex },
    });

    if (existing) {
      return existing;
    }

    const result = await strapi.db.query('plugin::superfields.color').create({
      data,
    });

    return result;
  },

  async getAllColors() {
    const colors = await strapi.db.query('plugin::superfields.color').findMany();
    return colors;
  },
});

module.exports = colorPickerService;