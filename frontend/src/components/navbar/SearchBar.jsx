import React from "react";
import {
  MDBBtn,
  MDBInputGroup,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import axios from "axios";

function SearchBar() {
  const [value, setValue] = React.useState("");
  const [match, setMatch] = React.useState([]);

  let users = [];

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/user/`).then((response) => {
      users = response.data.map((user) => user.username);
      setMatch(
        users.filter((user) => user.toLowerCase().includes(value.toLowerCase()))
      );
      setValue("");
    });
  };

  return (
    <div id="navbarSearch" onSubmit={handleSubmit}>
      <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
        <input
          className="form-control"
          placeholder="Type to search a user"
          aria-label="Search"
          type="Search"
          value={value}
          onChange={onChange}
        />
        <span className="place-holder"> </span>
        <MDBDropdown className="btn-group" dropleft group>
          <MDBDropdownToggle type="submit" outline>
            Search
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            {match.map((user) => (
              <MDBDropdownItem link key={user} href={`/profile/${user}`}>
                {user}
              </MDBDropdownItem>
            ))}
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBInputGroup>
    </div>
  );
}

export default SearchBar;
