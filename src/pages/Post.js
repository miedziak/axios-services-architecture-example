import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import postsService from "../api/services/postsService";
import usersService from "../api/services/usersService";

const Post = props => {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async ()=> {
        const fetchedPost = await postsService.getById(id);
        const fetchedComments = await postsService.getCommentsForPost(id);
        const fetchedUser = await usersService.getById(fetchedPost.userId);
        setPost(fetchedPost);
        setUser(fetchedUser);
        setComments(fetchedComments)
      }
    )();
  },[id]);
  if (!post) return <p>Loading...</p>
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <blockquote>{user.name} <strong>({user.email})</strong></blockquote>
      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment.id}>
          <h5>{comment.name} <small>({comment.email})</small></h5>
          <p>{comment.body}</p>
          <hr />
        </div>
      ))}

    </div>
  );
};


export default Post;
