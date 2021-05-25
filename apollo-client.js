import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "./utils/apiURL";

const link = new HttpLink({
  uri: API_URL,
});

const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
});

export default client;