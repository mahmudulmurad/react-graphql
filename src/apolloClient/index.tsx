import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import configEnv from "../config/config";
import { useState } from "react";

const httpLink = new HttpLink({
  uri: configEnv.apiUrl,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": configEnv.hasuraAdminSecret,
    },
  };
});

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

type Props = {
  children: React.ReactNode;
};

export const ApolloContextProvider = ({ children }: Props) => {
  const [client] = useState(createApolloClient());

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
