import Head from "next/head";

/** Head Component containing metadata for the website */
export default function HeadComponent({title}: {title: string}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Author website of Frederick Asamoah Jr, the author of The Pivot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}