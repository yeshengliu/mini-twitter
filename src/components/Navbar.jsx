import React, { useContext } from "react";
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
  return (
    <MDBNavbar sticky expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <MDBIcon fas icon="crow fa-2x me-3" style={{ color: "#709085" }} />
        </MDBNavbarBrand>
        <SearchBar />
        {isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
