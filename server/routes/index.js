module.exports = [
    {
      method: 'GET',
      path: '/colors',
      handler: 'color-picker.find',
      config: { auth: false },
    },
    {
      method: 'POST',
      path: '/colors',
      handler: 'color-picker.create',
      config: { auth: false },
    }
  ];
  