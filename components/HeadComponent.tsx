import Head from "next/head";

type HeadProps = {
  title: string;
  description: string;
};

/** Head Component containing metadata for the website */
export default function HeadComponent({ title, description }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${description}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
