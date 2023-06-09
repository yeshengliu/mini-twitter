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

  return (
    <div>
      <MDBDropdown>
        <img
          src={currUser.avatar}
          alt="avatar"
          className="rounded-circle"
          height={"30px"}
        />
        <span className="place-holder" />
        <MDBDropdownToggle tag="a" className="shadow-0">
          {currUser.username}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link href="/">
            Start a tweet
          </MDBDropdownItem>
          <MDBDropdownItem link href="/settings">
            Settings
          </MDBDropdownItem>
          <MDBDropdownItem link href={`/profile/${currUser.username}`}>
            My Page
          </MDBDropdownItem>
          <MDBDropdownItem link href="/logout">
            Log out
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

export default LoggedIn;
