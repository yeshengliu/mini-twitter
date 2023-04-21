import React, { useContext } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import NotLoggedIn from "./navbar/NotLoggedIn";
import LoggedIn from "./navbar/LoggedIn";

function Navbar() {
  const { isLoggedIn, user } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-light bg-light fluid">
      <div className="container-fluid">
        <div>
          <a class="navbar-brand" href="/">
            <MDBIcon fas icon="crow fa-2x me-3" style={{ color: "#709085" }} />
          </a>
        </div>

        <div class="d-flex align-items-center">
          {isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
