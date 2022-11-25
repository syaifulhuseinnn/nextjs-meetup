import { Heading, Text, Center, Code } from '@chakra-ui/react';

export default function Error({ status, message }) {
  return (
    <Center minH="80vh" flexDirection="column">
      <Code fontSize="10rem" textAlign="center">
        {status}
        <br />
        {message}
      </Code>
    </Center>
  );
}
