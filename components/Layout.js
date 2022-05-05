// import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return children ? (
    <div className="">
      <Header />
      {/* <div className="container grid-cols-12 px-4 mx-auto mb-auto"> */}
      {children}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  ) : (
    <></>
  );
};

export default Layout;
