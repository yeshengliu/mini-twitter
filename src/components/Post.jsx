import React, { useContext } from "react";
import { AppContext } from "../App";
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
import axios from "axios";

function Post(props) {
  const { isLoggedIn, currUser } = useContext(AppContext);
  const { post } = props;

  // TODO: edit and delete post function

  // TODO: click on a post username and redirect to this person's profile

  return (
    <MDBCard className="fluid" alignment="start">
      <MDBCardHeader>
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
          alt="avatar"
          className="rounded-circle"
          height={"50px"}
        />
        <a href="">{post.user}</a>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardText>{post.text}</MDBCardText>
        {isLoggedIn && currUser._id === post.user && (
          <MDBBtnGroup shadow="0" aria-label="Basic example">
            <MDBBtn color="secondary" outline href="#">
              Edit
            </MDBBtn>
            <MDBBtn color="secondary" outline href="#">
              Delete
            </MDBBtn>
          </MDBBtnGroup>
        )}
      </MDBCardBody>
      <MDBCardFooter className="text-muted">{post.timestamp}</MDBCardFooter>
    </MDBCard>
  );
}

export default Post;
