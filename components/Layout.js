// import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return children ? (
    <>
      <Header />
      <div style={{ marginTop: "104px" }}>{children}</div>
    </>
  ) : (
    <></>
  );
};

export default Layout;
