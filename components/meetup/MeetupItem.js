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
} from '@chakra-ui/react';

import { useRouter } from 'next/router';

export default function MeetupItem({ id, title, address, image }) {
  const router = useRouter();

  function joinMeetupHandler() {
    router.push(`/join-meetup/${id}`);
  }

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      minH="240px"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={image}
        alt={title}
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
