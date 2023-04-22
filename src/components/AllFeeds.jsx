import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import axios from "axios";

function AllFeeds() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/api/post");
      setPosts(response.data);
    }
    fetchPosts();
  });

  const feeds = posts.map((post) => <Post key={post._id} post={post} />);

  return <div>{feeds}</div>;
}

export default AllFeeds;
