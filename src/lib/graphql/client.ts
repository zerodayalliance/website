import { GraphQLClient } from "graphql-request";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;
const GRAPHQL_API_TOKEN = process.env.GRAPHQL_API_TOKEN as string;

export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPHQL_API_TOKEN}`,
  },
});
