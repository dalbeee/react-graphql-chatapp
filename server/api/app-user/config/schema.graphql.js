// const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `getMyId(uid: String!): AppUser!`,
  resolver: {
    Query: {
      getMyId: {
        resolverOf: "app-user.findOne", // from config/router.js
        async resolver(_, { uid }) {
          //아래 strapi-context 를 사용해서 찾는다
          // console.log(strapi.services); // context에서 서비스 목록을 반환!
          // console.log(strapi.models); // context에서 models 목록 반환!!
          const entity = await strapi.query("app-user").findOne({ uid });
          return entity;
          return sanitizeEntity(entity, {
            model: strapi.models["random-user"],
          });
        },
      },
    },
  },
};
