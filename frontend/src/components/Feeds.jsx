import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';

function Feeds({ usernames }) {
  const [posts, setPosts] = useState([]);
  const [feeds, setFeeds] = useState([]);

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
    setFeeds(
      posts.map((post) => (
        <Post key={post._id} post={post} posts={posts} setPosts={setPosts} />
      ))
    );
  }, [posts]);

  return posts.length > 0 ? (
    <div>{feeds}</div>
  ) : (
    <div>
      <br />
      <h2>This user has no posts yet...</h2>
    </div>
  );
}

export default Feeds;
