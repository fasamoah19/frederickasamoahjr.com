import { Box } from "@chakra-ui/react";
import Footer from "./Footer";

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

  return (
    <>
      <Box>{children}</Box>
      <Footer />
    </>
  );
}
