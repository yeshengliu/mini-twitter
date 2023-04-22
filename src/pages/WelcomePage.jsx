import React, { useContext, useEffect } from "react";
import TweetBox from "../components/TweetBox";
import AllFeeds from "../components/AllFeeds";
import { AppContext } from "../App";

function WelcomePage() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <div>
      {isLoggedIn && <TweetBox />}
      <AllFeeds />
    </div>
  );
}

export default WelcomePage;
