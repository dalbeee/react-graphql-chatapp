module.exports = {
  query: ` roomByUid(uid: String!):Room `,
  resolver: {
    Query: {
      roomByUid: {
        resolverOf: "room.findOne",
        async resolver(_, { uid }) {
          const entity = await strapi.services.room.findOne({ uid });
          return entity;
        },
      },
    },
  },
};
