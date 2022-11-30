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
import Head from "next/head";

export default function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta
          name="description"
          content="Sign now to find meetup events around you to meet people and make new friends or find a new hobby."
        />
      </Head>
      <VStack
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        gap={8}
        p={{ base: 3 }}
      >
        <Heading>Sign In</Heading>
        <VStack
          boxShadow="base"
          rounded="md"
          p={6}
          gap={2}
          width={{ base: "full", md: "md" }}
        >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email" size="lg" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" size="lg" />
          </FormControl>
          <Button colorScheme="messenger" width="full" size="lg">
            Sign In
          </Button>
          <Divider />
          <Button
            width="full"
            colorScheme="messenger"
            onClick={() => signIn(providers.google.id)}
            rightIcon={<FcGoogle />}
            variant="outline"
            size="lg"
          >
            Sign In with {providers.google.name}
          </Button>
        </VStack>
      </VStack>
    </>
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
