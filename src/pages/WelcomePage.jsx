import React, { useContext, useState } from "react";
import TweetBox from "../components/TweetBox";
import AllFeeds from "../components/AllFeeds";
import { AppContext } from "../App";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function WelcomePage() {
  const { isLoggedIn } = useContext(AppContext);
  const [posts, setPosts] = useState([]);

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6" className="mt-2">
          {isLoggedIn && <TweetBox posts={posts} setPosts={setPosts} />}
          <br />
          <AllFeeds posts={posts} setPosts={setPosts} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default WelcomePage;
