import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';

function Feeds({ usernames }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let newPosts = [];
      for (let username of usernames) {
        try {
          const response = await axios.get(`/api/post/${username}`);
          newPosts = newPosts.concat(response.data);
        } catch (err) {
          console.error(err);
        }
      }
      setPosts(newPosts);
    }
    fetchPosts();
  }, [posts]);

  const feeds = posts.map((post) => (
    <Post key={post._id} post={post} posts={posts} setPosts={setPosts} />
  ));

  return <div>{feeds}</div>;
}

export default Feeds;
