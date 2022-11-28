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
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { signOut, useSession } from "next-auth/react";
import ProfilePicture from "../profile/ProfilePicture";

export default function Navigation() {
  const { data: session, status } = useSession();
  console.log({ session, status });

  return (
    <Flex bgColor="messenger.500" p={6} alignItems="center">
      <Heading
        as="h1"
        textColor="white"
        size={{ base: "md", xl: "lg" }}
        flexGrow={1}
      >
        Meetup App
      </Heading>

      <Flex gap={{ md: 2, lg: 6 }} alignItems="center">
        <NextLink href="/" legacyBehavior passHref>
          <Link
            _hover={{
              textDecor: "none",
              borderBottomColor: "white",
            }}
            display={{ base: "none", md: "block" }}
            textColor="white"
            fontSize="lg"
            px={4}
            py={2}
            borderBottom="2px"
            borderBottomColor="transparent"
          >
            Meetup List
          </Link>
        </NextLink>
        <NextLink href="/new-meetup" legacyBehavior passHref>
          <Link
            _hover={{
              textDecor: "none",
              borderBottomColor: "white",
            }}
            textColor="white"
            fontSize="lg"
            px={4}
            py={2}
            borderBottom="2px"
            borderBottomColor="transparent"
            display={{ base: "none", md: "block" }}
          >
            Add Meetup
          </Link>
        </NextLink>
        <Menu>
          <MenuButton
            as={Button}
            bg="transparent"
            textColor="white"
            border={{ base: "none", md: "1px" }}
            _hover={{
              bg: "gray.50",
              borderColor: "gray.50",
              textColor: "black",
            }}
            _expanded={{
              bg: "gray.100",
              borderColor: "gray.100",
              textColor: "black",
            }}
            rightIcon={<ChevronDownIcon />}
            py={{ md: 6 }}
            px={{ md: 3 }}
            p={{ base: 0 }}
          >
            <HStack>
              <Text display={{ base: "none", md: "block" }}>
                {status === "authenticated" && session.user.name}
              </Text>
              <ProfilePicture
                src={status === "authenticated" && session.user.image}
                name={status === "authenticated" && session.user.name}
              />
            </HStack>
          </MenuButton>
          <MenuList p={2}>
            <MenuItem
              as={Button}
              _hover={{
                bg: "messenger.500",
                textColor: "white",
              }}
              display={{ base: "block", md: "none" }}
            >
              <NextLink href="/" legacyBehavior passHref>
                <Link
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  Meetup List
                </Link>
              </NextLink>
            </MenuItem>
            <MenuItem
              as={Button}
              _hover={{
                bg: "messenger.500",
                textColor: "white",
              }}
              display={{ base: "block", md: "none" }}
            >
              <NextLink href="/new-meetup" legacyBehavior passHref>
                <Link
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  Create Meetup
                </Link>
              </NextLink>
            </MenuItem>
            <MenuItem
              as={Button}
              rightIcon={<ExternalLinkIcon />}
              onClick={() => signOut()}
              _hover={{
                bg: "red.500",
                textColor: "white",
              }}
            >
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
