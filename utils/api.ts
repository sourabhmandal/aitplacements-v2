import { GraphQLClient } from "graphql-request";
import { getSdk } from "../graphql/generated/graphql";
import { QueryClient } from "react-query";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

export const { getUsers, getUserByName } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
