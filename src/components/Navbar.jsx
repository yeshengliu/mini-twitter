import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { AppContext } from "../App";
import NotLoggedIn from "./navbar/NotLoggedIn";
import LoggedIn from "./navbar/LoggedIn";
import SearchBar from "./navbar/SearchBar";

function Navbar() {
  const { isLoggedIn } = useContext(AppContext);

  const location = useLocation();

  const isRegisterPage = location.pathname === "/register";
  const isLogInPage = location.pathname === "/login";

  return (
    <MDBNavbar sticky expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <MDBIcon
            id="logo"
            fas
            icon="crow fa-2x me-3"
            style={{ color: "#709085" }}
          />
        </MDBNavbarBrand>
        {!isRegisterPage && !isLogInPage && <SearchBar />}

        {isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
