import React, { useContext, useEffect } from "react";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import { AppContext } from "../App";

function WelcomePage() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <div>
      {isLoggedIn && <TweetBox />}
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default WelcomePage;
