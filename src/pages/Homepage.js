import React, { useEffect, useState } from 'react';
import postsService from "../api/services/postsService";
import {Link} from "react-router-dom";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async ()=> {
        const results = await postsService.getAll();
        setPosts(results);
      }
    )();
  },[]);
  if (posts.length === 0) return <p>Loading...</p>
  return (
    <div>
      {posts.map(post => (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`}>read more</Link>
        </div>
      ))}
    </div>
  );
};


export default Homepage;
