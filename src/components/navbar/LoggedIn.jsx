import React, { useContext } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { AppContext } from "../../App";

function LoggedIn() {
  const { currUser } = useContext(AppContext);

  // TODO: logout function
  // TODO: go to my page
  // TODO: go to settings

  return (
    <div>
      <MDBDropdown>
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
          alt="avatar"
          className="rounded-circle"
          height={"30px"}
        />
        <span className="place-holder" />
        <MDBDropdownToggle tag='a' className="shadow-0">
          {currUser.username}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Setting</MDBDropdownItem>
          <MDBDropdownItem link href={`/profile/${currUser.username}`}>
            My Page
          </MDBDropdownItem>
          <MDBDropdownItem link>LogOut</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

export default LoggedIn;
