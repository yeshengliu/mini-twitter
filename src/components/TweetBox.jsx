import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardHeader,
} from "mdb-react-ui-kit";

function TweetBox() {
  return (
    <MDBCard className="w-75" alignment="start" border="secondary">
      <MDBCardHeader>
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
          alt="avatar"
          className="rounded-circle"
          height={"50px"}
        />{" "}
        <a href="">Profile Name</a>
      </MDBCardHeader>
      <MDBCardBody>
        <div class="form-outline">
          <textarea
            class="form-control"
            id="textAreaExample"
            rows="3"
          ></textarea>
          <label class="form-label" for="textAreaExample">
            Start a new tweet
          </label>
        </div>
        <MDBBtn color="secondary" outline href="#">
          Tweet
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default TweetBox;
