import { Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack height="100%">
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;