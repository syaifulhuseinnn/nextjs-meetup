import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import Navigation from '../components/navigation/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Navigation />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;