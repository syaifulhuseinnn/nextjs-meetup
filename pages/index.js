import MeetupList from "../components/meetup/MeetupList";
import Error from "../components/error/Error";
import { getSession } from "next-auth/react";
import MainLayout from "../layouts/MainLayout";

export default function Home({ status, message, meetups }) {
  if (status !== 200) {
    return <Error status={status} message={message} />;
  }
  return (
    <MainLayout
      title="Discover Meetup"
      meta_description="Discover meetup events around you! Get new friends and new hobby!"
    >
      <MeetupList data={meetups} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  try {
    const response = await fetch(
      "https://meetup-fake-api.herokuapp.com/meetups"
    );

    if (response.status === 200) {
      const meetupsData = await response.json();

      return {
        props: {
          meetups: meetupsData,
          status: response.status,
          message: response.statusText,
        },
      };
    } else {
      console.error(response);
      throw { status: response.status, message: response.statusText };
    }
  } catch (error) {
    return {
      props: {
        meetups: error,
        status: error.status,
        message: error.message,
      },
    };
  }
}
