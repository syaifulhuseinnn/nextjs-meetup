import MeetupDetails from "../../../components/meetup/MeetupDetails";
import Head from "next/head";
import MainLayout from "../../../layouts/MainLayout";

export default function MeetupDetailsPage({ meetup }) {
  return (
    <MainLayout title={meetup.title} meta_description={meetup.description}>
      <MeetupDetails
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
      />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://meetup-fake-api.herokuapp.com/meetups");

  if (response.status === 200) {
    const meetupsData = await response.json();

    return {
      fallback: "blocking",
      paths: meetupsData.map((meetup) => {
        return {
          params: {
            meetupId: meetup.id.toString(),
          },
        };
      }),
    };
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const response = await fetch(
    `https://meetup-fake-api.herokuapp.com/meetups/${meetupId}`
  );

  if (response.status === 200) {
    const meetupsData = await response.json();

    return {
      props: {
        meetup: meetupsData,
      },
      revalidate: 3,
    };
  }
}
