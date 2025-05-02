module.exports = {
  createColor: async (data) => {
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



  getAllColors: async () => {
    const colors = await strapi.db.query('plugin::superfields.color').findMany();
    return colors;
  },
};
