import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { API_URL } from "./utils/apiURL";

const cache = new InMemoryCache();

if(typeof window !== "undefined"){
  persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
  });
}

const client = new ApolloClient({
    uri: API_URL,
    cache
});

export default client;