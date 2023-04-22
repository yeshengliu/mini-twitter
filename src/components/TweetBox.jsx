import React, { useContext, useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardHeader,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
} from "mdb-react-ui-kit";
import { AppContext } from "../App";
import axios from "axios";

function TweetBox() {
  const { isLoggedIn, currUser } = useContext(AppContext);

  const [formValue, setFormValue] = useState({
    text: "",
    picUrl: "testUrl",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("submit");
    if (!isLoggedIn) {
      return;
    }

    try {
      await axios.post("/api/post", {
        user: currUser._id,
        text: formValue.text,
        picUrl: formValue.picUrl,
      });
      setFormValue({ ...formValue, text: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MDBCard className="fluid" alignment="start" border="secondary">
      <MDBCardHeader>
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
          alt="avatar"
          className="rounded-circle"
          height={"50px"}
        />{" "}
        <a href="">{currUser.username}</a>
      </MDBCardHeader>
      <form onSubmit={handleSubmit}>
        <div className="form-outline">
          <textarea
            className="form-control"
            id="textAreaExample"
            rows="3"
            value={formValue.text}
            name="text"
            onChange={onChange}
          />
          <label className="form-label" htmlFor="textAreaExample">
            Start a new tweet
          </label>
        </div>
        <MDBBtn type="submit" color="secondary" outline>
          Tweet
        </MDBBtn>
      </form>
    </MDBCard>
  );
}

export default TweetBox;
