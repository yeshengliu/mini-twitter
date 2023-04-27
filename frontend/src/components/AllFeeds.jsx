import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import { MDBContainer } from 'mdb-react-ui-kit';

function AllFeeds({ posts, setPosts }) {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/api/post');
      setPosts(response.data);
    }
    fetchPosts();
    setFeeds(
      posts.map((post) => (
        <Post key={post._id} post={post} posts={posts} setPosts={setPosts} />
      ))
    );
  }, [posts]);

  return <MDBContainer fluid>{feeds}</MDBContainer>;
}

export default AllFeeds;
