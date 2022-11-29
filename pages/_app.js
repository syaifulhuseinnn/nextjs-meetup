import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Navigation from "../components/navigation/Navigation";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Container maxW="full" p={0}>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
