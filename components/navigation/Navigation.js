import { Flex, Text, Box, Heading, Center, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function Navigation() {
  return (
    <Flex bgColor="purple.600" p={6}>
      <Center>
        <Heading as="h1" textColor="white" size="md">
          Meetup App
        </Heading>
      </Center>
      <Spacer />
      <Center>
        <Flex gap={8}>
          <Link href="/">
            <Text textColor="white">Meetup List</Text>
          </Link>
          <Link href="/new-meetup">
            <Text textColor="white">Add New Meetup</Text>
          </Link>
        </Flex>
      </Center>
    </Flex>
  );
}
