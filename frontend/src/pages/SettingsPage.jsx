import React, { useContext, useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SettingsPage() {
  const navigate = useNavigate();
  const { isLoggedIn, currUser } = useContext(AppContext);

  const [formValue, setFormValue] = useState({
    name: currUser.name,
    bio: currUser.bio,
    description: currUser.description,
  });

  if (!isLoggedIn) {
    navigate("/login");
  }

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      return;
    }

    try {
      let newCurrUser = {
        ...currUser,
        name: formValue.name,
        bio: formValue.bio,
        description: formValue.description,
      };
      await axios.put(`/api/user/${currUser._id}`, newCurrUser);
      navigate(`/profile/${currUser.username}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MDBContainer>
        <h2 className="mt-5">User Settings</h2>
        <form className="mt-5" onSubmit={handleSubmit}>
          <MDBInput
            className="mb-4 mt-4"
            id="name"
            label="Name"
            // valueDefault={currUser.name}
            value={formValue.name}
            name="name"
            onChange={onChange}
          />
          <MDBInput
            className="mb-4 mt-4"
            id="bio"
            label="Bio"
            // valueDefault={currUser.bio}
            value={formValue.bio}
            name="bio"
            onChange={onChange}
          />
          <MDBTextArea
            className="mb-4"
            id="description"
            label="Description"
            rows={2}
            // defaultValue={currUser.description}
            value={formValue.description}
            name="description"
            onChange={onChange}
          />

          <MDBBtn type="submit" className="mb-4" block>
            Submit
          </MDBBtn>
        </form>
      </MDBContainer>
    </>
  );
}

export default SettingsPage;
