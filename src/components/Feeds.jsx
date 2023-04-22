import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import axios from "axios";

function Feeds({ usernames }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      for (let username of usernames) {
        try {
          const response = await axios.get(`/api/post/${username}`);
          setPosts(posts.concat(response.data));
        } catch (err) {
          console.error(err);
        }
      }
    }
    fetchPosts();
  }, []);

  const feeds = posts.map((post) => <Post key={post._id} post={post} />);

  return <div>{feeds}</div>;
}

export default Feeds;
