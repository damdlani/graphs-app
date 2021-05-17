import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { Provider } from "next-auth/client";
import { Page } from "../components/Page/Page";
import { API_URL } from "../utils/apiURL";

const createApolloClient = () => {
  const link = new HttpLink({
    uri: API_URL,
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Provider session={pageProps.session}>
        <ApolloProvider client={createApolloClient()}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </Page>
  );
}

export default MyApp;
