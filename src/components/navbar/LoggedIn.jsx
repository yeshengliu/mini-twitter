import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

function LoggedIn() {
  return (
    <div>
      <MDBDropdown>
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
          alt="avatar"
          className="rounded-circle"
          height={"30px"}
        />
        <MDBDropdownToggle tag="a" className="shadow-0">
          Profile Name
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>My Page</MDBDropdownItem>
          <MDBDropdownItem link>LogOut</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

export default LoggedIn;
