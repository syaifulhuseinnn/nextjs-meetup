import {
  Flex,
  Spacer,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function MeetupItem({ id, title, address, image }) {
  const router = useRouter();

  function joinMeetupHandler() {
    router.push(`/join-meetup/${id}`);
  }

  return (
    <Card
      direction={{ base: "column", md: "row", xl: "column" }}
      overflow="hidden"
      variant="outline"
      minH={{ lg: "290px", xl: "300px" }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", md: "190px", xl: "unset" }}
        src={image}
        alt={title}
        height={{ xl: "250px" }}
        width={{ xl: "100%" }}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="2">{address}</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="messenger"
            onClick={joinMeetupHandler}
            type="button"
          >
            Join Meetup
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
