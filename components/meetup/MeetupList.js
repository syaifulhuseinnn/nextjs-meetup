import MeetupItem from './MeetupItem';
import { Grid, GridItem } from '@chakra-ui/react';

export default function MeetupList({ data }) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={8} p={8}>
      {data.map((meetup) => (
        <GridItem key={meetup.id}>
          <MeetupItem
            id={meetup.id}
            title={meetup.title}
            address={meetup.address}
            image={meetup.image}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
