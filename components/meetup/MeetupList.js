import MeetupItem from "./MeetupItem";
import { Grid, GridItem } from "@chakra-ui/react";

export default function MeetupList({ data }) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        lg: "repeat(2,1fr)",
        xl: "repeat(3,1fr)",
      }}
      gap={8}
      p={{ base: 4, md: 6 }}
    >
      {data.map((meetup) => (
        <GridItem key={meetup.id}>
          <MeetupItem
            id={meetup.id}
            title={meetup.title}
            address={meetup.address}
            image={meetup.image}
            description={meetup.description}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
