import React from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  FormControl,
  Input,
  Divider,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import { signIn, getProviders, getSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SignIn({ providers }) {
  console.log(providers);
  return (
    <VStack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      gap={8}
    >
      <Heading>Sign In</Heading>
      <VStack width="md" boxShadow="base" rounded="md" p={6} gap={2}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button colorScheme="messenger" width="full">
          Sign In
        </Button>
        <Divider />
        <Button
          width="full"
          colorScheme="messenger"
          onClick={() => signIn(providers.google.id)}
          rightIcon={<FcGoogle />}
          variant="outline"
        >
          Sign In with {providers.google.name}
        </Button>
      </VStack>
    </VStack>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { providers },
  };
}
