import React, { useContext, useEffect } from "react";
import TweetBox from "../components/TweetBox";
import AllFeeds from "../components/AllFeeds";
import { AppContext } from "../App";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function WelcomePage() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center'>
        <MDBCol md='10' className="mt-5">
          {isLoggedIn && <TweetBox />}
          <br />
          <AllFeeds />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default WelcomePage;
