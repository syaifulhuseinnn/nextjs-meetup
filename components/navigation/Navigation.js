import {
  Flex,
  Text,
  Box,
  Heading,
  Center,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function ProfilePicture() {
  return (
    <Image
      borderRadius="full"
      boxSize="30px"
      src="https://bit.ly/dan-abramov"
      alt="Dan Abramov"
    />
  );
}

export default function Navigation() {
  const { data: session, status } = useSession();
  console.log({ session, status });

  return (
    <Flex bgColor="purple.600" p={6} alignItems="center">
      <Heading as="h1" textColor="white" size="md" flexGrow={1}>
        Meetup App
      </Heading>

      <Flex gap={8} alignItems="center">
        <Link href="/">
          <Text textColor="white">Meetup List</Text>
        </Link>
        <Link href="/new-meetup">
          <Text textColor="white">Add New Meetup</Text>
        </Link>
        <Menu>
          <MenuButton
            as={Button}
            bg="transparent"
            textColor="white"
            border="1px"
            _hover={{ bg: "red.500", borderColor: "red.500" }}
            _expanded={{ bg: "red.400", borderColor: "red.400" }}
            rightIcon={<ChevronDownIcon />}
            py={6}
          >
            <HStack>
              <Text>{status === "authenticated" && session.user.name}</Text>
              <ProfilePicture />
            </HStack>
          </MenuButton>
          <MenuList p={2}>
            <MenuItem
              as={Button}
              rightIcon={<ExternalLinkIcon />}
              onClick={() => signOut()}
            >
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
