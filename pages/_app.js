import {
  ApolloProvider,
} from "@apollo/client";
import { Provider } from "next-auth/client";
import client from "../apollo-client";
import { Page } from "../components/Page/Page";
import { GlobalStyle } from "../GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Provider session={pageProps.session}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </Page>
  );
}

export default MyApp;
