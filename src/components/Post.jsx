import React, { useContext, useEffect, useState } from "react";
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
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

function Post(props) {
  const { isLoggedIn, currUser } = useContext(AppContext);
  const { post } = props;
  const [ showEditField, setShowEditField ] = useState(false);
  const [ formValue, setFormValue ] = useState({
    text: "",
    picUrl: "testUrl",
  });

  // Functions for post editing
  const handleEdit = () => {
    showEditField ? setShowEditField(false) : setShowEditField(true);
  }

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/post/${post._id}`, {
        text: formValue.text,
      });
      setFormValue({ ...formValue, text: "" });
      setShowEditField(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Functions for post deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${post._id}`);
    } catch (err) {
      console.error(err);
    }
  };

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
          <MDBBtnGroup shadow="0" aria-label="Basic example" className="float-end">
            <MDBBtn color="secondary" outline onClick={handleEdit}>
              <MDBIcon far icon="edit"/>
            </MDBBtn>
            <MDBBtn color="secondary" outline onClick={handleDelete}>
              <MDBIcon far icon="trash-alt"/>
            </MDBBtn>
          </MDBBtnGroup>
        )}
        {showEditField && (
          <form className="mt-5" onSubmit={handleEditSubmit}>
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
                Edit your post
              </label>
            </div>
            <MDBBtnGroup shadow="0" aria-label="Basic example" className="float-end">
              <MDBBtn type="submit" color="secondary" outline>
                Submit
              </MDBBtn>
            </MDBBtnGroup>
          </form>
        )}
      </MDBCardBody>
      <MDBCardFooter className="text-muted">{post.timestamp}</MDBCardFooter>
    </MDBCard>
  );
}

export default Post;
