import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
