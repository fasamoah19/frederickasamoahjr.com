import { GetServerSidePropsContext } from "next";

/**
 * Helper function that generates the sitemaps for the Fred's author website
 * 
 * @returns site map xml string
 */
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.fredasamoahjr.com</loc>
      </url>
      <url>
        <loc>https://www.fredasamoahjr.com/about</loc>
      </url>
      <url>
        <loc>https://www.fredasamoahjr.com/contact</loc>
      </url>
   </urlset>
  `;
}

/**
 * Writes the sitemap during a server side request
 * 
 * @param param0 ServerResponse
 * @returns empty props
 */
export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

/**
 * SiteMap component. The getServerSideProps does all the heavy lifting.
 */
export default function SiteMap() { }