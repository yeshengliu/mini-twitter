import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';

function UserInfo({ username }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/api/user/username/${username}`);
      setUser(res.data);
    };
    getUser();
  });

  return (
    <MDBCard>
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
        position="top"
        alt="..."
        className="img-info"
      />
      <MDBCardBody className="text-start pb-0">
        <span className="d-flex justify-content" style={{ height: '50px' }}>
          <img
            src={user.avatar}
            alt="avatar"
            className="rounded-circle"
            height={'100px'}
            style={{ position: 'relative', top: '-80px' }}
          />
          <h2 className="ms-5 mb-0">{user.name}</h2>
        </span>
        <p className="text-muted mt-0">{`@${user.username}`}</p>
        {user.bio && <p className="bio">{user.bio}</p>}
        {user.description && <p>{user.description}</p>}
        <p className="text-muted ts-80 text-end">
          Joined {new Date(user.timestamp).toLocaleString()}
        </p>
      </MDBCardBody>
    </MDBCard>
  );
}

export default UserInfo;
