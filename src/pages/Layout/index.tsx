import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import MenuLateral from "../../components/MenuLateral";
import MenuTopo from "../../components/MenuTopo";

export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <MenuLateral />
        <MenuTopo />
        {/* TOP Nav Bar END */}
        {/* Page Content  */}
        <div id="content-page" className="content-page">
          <div className="container-fluid"></div>
        </div>
      </div>
    </>
  );
}