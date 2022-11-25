import {
  VStack,
  Image,
  Heading,
  Text,
  AspectRatio,
  Box,
  Divider,
} from '@chakra-ui/react';

export default function MeetupDetails({ image, title, address, description }) {
  return (
    <VStack spacing={8} p={8}>
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        height="250px"
        width="100%"
      />
      <Divider />
      <Box as="article" width="100%" display="flex" flexDir="column" gap={8}>
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
        <Box bg="gray.100" p={6} as="section">
          <Heading as="h2" size="md" mb={4}>
            Location
          </Heading>
          <Text as="address" fontSize="md">
            {address}
          </Text>
        </Box>
      </Box>
      <Text>{description}</Text>
    </VStack>
  );
}
