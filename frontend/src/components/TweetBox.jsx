import React, { useContext, useState } from 'react';
import { MDBCard, MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { AppContext } from '../App';
import axios from 'axios';

function TweetBox({ posts, setPosts }) {
  const { isLoggedIn, currUser } = useContext(AppContext);
  const [showPicInput, setShowPicInput] = useState(false);

  const [formValue, setFormValue] = useState({
    text: '',
    picUrl: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      return;
    }

    try {
      const newPost = {
        user: currUser._id,
        text: formValue.text,
        picUrl: formValue.picUrl,
      };
      await axios.post('/api/post', newPost);
      setFormValue({ ...formValue, text: '', picUrl: '' });
      setPosts([...posts, newPost]);
    } catch (err) {
      console.log(err);
    }
  };

  const updatePicInput = () => {
    setShowPicInput(!showPicInput);
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="fluid" alignment="start" border="secondary">
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
          {showPicInput && (
            <MDBInput
              wrapperClass="mb-4 w-100"
              value={formValue.picUrl}
              name="picUrl"
              onChange={onChange}
              label="Image Url (optional)"
            />
          )}

          <MDBBtn
            type="button"
            color="secondary"
            outline
            onClick={updatePicInput}
          >
            Upload Image
          </MDBBtn>
          <MDBBtn type="submit" color="secondary" outline>
            Tweet
          </MDBBtn>
        </form>
      </MDBCard>
    </MDBContainer>
  );
}

export default TweetBox;
