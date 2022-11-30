import {
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  Img,
  Stack,
  Button,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function MeetupItem({ id, title, address, image, description }) {
  const router = useRouter();

  function joinMeetupHandler() {
    router.push(`/join-meetup/${id}`);
  }

  return (
    <Card
      direction={{ base: "column", md: "row", xl: "column" }}
      overflow="hidden"
      variant="outline"
      minH={{ lg: "290px", xl: "500px" }}
      maxH={{ xl: "500px" }}
    >
      <Img
        objectFit="cover"
        maxW={{ base: "100%", md: "190px", xl: "unset" }}
        src={image ? image : `/placeholder_img.jpeg`}
        alt={title}
        height={{ xl: "250px" }}
        width={{ base: "100%", xl: "100%" }}
        loading="lazy"
        sizes="10px"
      />

      <Stack flexGrow={1}>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="2" noOfLines={3}>
            {address}
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="outline"
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
