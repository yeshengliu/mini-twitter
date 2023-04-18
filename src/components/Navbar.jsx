import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Navbar() {
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
          <button
            type="button"
            class="btn btn-link px-3 me-2"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            type="button"
            class="btn btn-secondary me-3"
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
