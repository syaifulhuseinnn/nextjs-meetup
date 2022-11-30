import Navigation from "../components/navigation/Navigation";
import Head from "next/head";

export default function MainLayout({ children, title, meta_description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta_description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
      </Head>
      <Navigation />
      {children}
    </>
  );
}
