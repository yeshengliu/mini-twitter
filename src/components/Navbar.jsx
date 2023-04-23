import React, { useContext } from "react";
import { MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import NotLoggedIn from "./navbar/NotLoggedIn";
import LoggedIn from "./navbar/LoggedIn";

function Navbar() {
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      
          <MDBNavbarBrand href="/">
              <MDBIcon fas icon="crow fa-2x me-3" style={{ color: "#709085" }} />
          </MDBNavbarBrand>

          {isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}

      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
