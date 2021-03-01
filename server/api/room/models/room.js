"use strict";

const { v4: uuidv4 } = require("uuid");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      data.uid = uuidv4();
    },
  },
};
