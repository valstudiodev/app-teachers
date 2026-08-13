import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router";

function MainLayout(): React.JSX.Element {
  console.log('Main page render');

  return (
    <div className="wrapper">
      <Header className="header" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;