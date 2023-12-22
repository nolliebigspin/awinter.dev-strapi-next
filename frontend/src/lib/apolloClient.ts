import {
  ApolloClient,
  ApolloLink,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  link: ApolloLink.from([
    new HttpLink({
      uri: `${process.env.STRAPI_URL}/graphql`,
      headers: {
        authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
      },
    }),
  ]),
});

export default client;
