import React from "react";
import { useParams } from "react-router-dom";
import Feeds from "../components/Feeds";
import UserInfo from "../components/UserInfo";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function ProfilePage() {
  const { username } = useParams();

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6" className="mt-2">
          <UserInfo username={username} />
          <br />
          <Feeds usernames={[username]} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProfilePage;
