import { useState, useEffect } from "react";
import useSWR from "swr";
import Head from "next/head";
import MeetupList from "../components/meetup/MeetupList";
import Error from "../components/error/Error";

export default function Home({ meetups, status, message }) {
  const [meetupsData, setMeetupsData] = useState(meetups);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://meetup-fake-api.herokuapp.com/meetups",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setMeetupsData(data);
    }
  }, [data]);

  if (status !== 200) {
    return <Error status={status} message={message} />;
  }
  return (
    <>
      <Head>
        <title>Meetup App</title>
        <meta name="description" content="Discover meetup around you!" />
      </Head>
      <MeetupList data={meetupsData} />
    </>
  );
}

export async function getStaticProps() {
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
