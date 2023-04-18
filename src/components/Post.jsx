import React from "react";
import { Avatar } from "@material-ui/core";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
  MDBCardImage,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtnGroup,
} from "mdb-react-ui-kit";

function Post() {
  return (
    <MDBCard className="fluid" alignment="start">
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
        <MDBCardText>
          With supporting text below as a natural lead-in to additional content.
        </MDBCardText>
        <MDBBtnGroup shadow="0" aria-label="Basic example">
          <MDBBtn color="secondary" outline href="#">
            Edit
          </MDBBtn>
          <MDBBtn color="secondary" outline href="#">
            Delete
          </MDBBtn>
        </MDBBtnGroup>
      </MDBCardBody>
      <MDBCardFooter className="text-muted">Timestamp</MDBCardFooter>
    </MDBCard>
  );
}

export default Post;
