module.exports = {
  subscription: `
    chat: JSON,
    subscriptionRoom(uid: String!): JSON,
  `,
  resolver: {
    Subscription: {
      chat: {
        resolverOf: "chat.findOne",
        subscribe: () => {
          return strapi.graphql.pubsub.asyncIterator("test1");
        },
      },

      subscriptionRoom: {
        resolverOf: "room.findOne",
        subscribe: (_, args) => {
          console.log(args);
          return strapi.graphql.pubsub.asyncIterator(args.uid);
        },
      },
    },
  },
};
