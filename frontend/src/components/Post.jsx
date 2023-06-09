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
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";

function Post({ post, posts, setPosts }) {
  const { isLoggedIn, currUser } = useContext(AppContext);
  const [showEditField, setShowEditField] = useState(false);
  const [formValue, setFormValue] = useState({
    text: "",
    picUrl: "",
  });
  const [user, setUser] = useState({});

  // Get user info from post
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`/api/user/${post.user}`);
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    // const getPost = async () => {
    //   try {
    //     const res = await axios.get(`/api/post/${post._id}`);
    //     setFormValue({
    //       ...formValue,
    //       text: res.data.text,
    //       picUrl: res.data.picUrl,
    //     });
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    getUser();
    // getPost();
  }, []);

  // Functions for post editing
  const handleEdit = () => {
    showEditField ? setShowEditField(false) : setShowEditField(true);
  };

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (formValue.text) {
      try {
        await axios.put(`/api/post/${post._id}`, {
          text: formValue.text,
        });
        setFormValue({ ...formValue, text: "" });
        setShowEditField(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  // Functions for post deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${post._id}`);
      setPosts(posts.filter((p) => p._id !== post._id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MDBCard className="fluid" alignment="start">
      <MDBCardHeader>
        <img
          src={user.avatar}
          alt="avatar"
          className="rounded-circle"
          height={"50px"}
        />
        <span className="place-holder" />
        <a href={`/profile/${user.username}`}>{user.username}</a>
      </MDBCardHeader>
      {post.picUrl && (
        <MDBCardImage src={post.picUrl} position="top" alt="failed to load" />
      )}
      <MDBCardBody>
        <MDBCardText>{post.text}</MDBCardText>
        {isLoggedIn && currUser._id === post.user && (
          <MDBBtnGroup
            shadow="0"
            aria-label="Basic example"
            className="float-end"
          >
            <MDBBtn color="secondary" outline onClick={handleEdit}>
              <MDBIcon far icon="edit" />
            </MDBBtn>
            <MDBBtn color="secondary" outline onClick={handleDelete}>
              <MDBIcon far icon="trash-alt" />
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
              {/* <MDBInput
                wrapperClass="mb-4 w-100"
                value={formValue.picUrl}
                name="picUrl"
                onChange={onChange}
                label="Image Url (optional)"
              /> */}
              <label className="form-label" htmlFor="textAreaExample">
                Edit your post
              </label>
            </div>
            <MDBBtnGroup
              shadow="0"
              aria-label="Basic example"
              className="float-end"
            >
              <MDBBtn type="submit" color="secondary" outline>
                Submit
              </MDBBtn>
            </MDBBtnGroup>
          </form>
        )}
      </MDBCardBody>
      <MDBCardFooter className="text-muted ts-80">
        {new Date(post.timestamp).toLocaleString()}
      </MDBCardFooter>
    </MDBCard>
  );
}

export default Post;
