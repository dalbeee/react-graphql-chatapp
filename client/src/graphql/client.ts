import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const cache = new InMemoryCache();

const headers = () => {
  // const token = localStorage.getItem("token");
  // if (!token) return;
  // return {
  //   authorization: `bearer ${token}`,
  // };
};

const httpLink = createHttpLink({
  uri: "http://localhost:1337/graphql",
  headers,
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:1337/graphql",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache,
});

export default client;
