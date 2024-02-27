import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useRouter } from "next/router";

/**
 * Props that the Layout component receives
 *
 * @param children - JSX for the pages that will be displayed in this Layout
 * component
 */
type LayoutProps = {
  children: React.ReactNode;
};


export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  return (
    <>
      <Box>{children}</Box>
      <Footer />
      <SpeedInsights route={router.pathname} />
    </>
  );
}
