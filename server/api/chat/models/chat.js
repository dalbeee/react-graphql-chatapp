"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    afterCreate: async (results, params, populate) => {
      strapi.graphql.pubsub.publish("test1", {
        chat: results,
      });
    },
  },
};
