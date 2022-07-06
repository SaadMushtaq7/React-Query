import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { createPost, updatePost } from "../services/CRUD";
import "../styles/post.css";

const PostForm = () => {
  const location = useLocation();
  const { post } = location.state || [];

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.body : "");

  const {
    mutate: addPost,
    isLoading: addLoading,
    isError: addError,
    isSuccess: addSuccess,
  } = useMutation(createPost);
  const {
    mutate: editPost,
    isLoading: editLoading,
    isError: editError,
    isSuccess: editSuccess,
  } = useMutation(updatePost);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (post) {
      editPost(post.id, title, content, post.userId);
    } else {
      addPost(title, content);
    }
  };

  if (addLoading) {
    return (
      <div>
        <h2>Creating new User...</h2>
      </div>
    );
  }
  if (addError) {
    return (
      <div>
        <h2>Error creating the User!</h2>
      </div>
    );
  }

  if (editLoading) {
    return (
      <div>
        <h2>updating new User...</h2>
      </div>
    );
  }
  if (editError) {
    return (
      <div>
        <h2>Error updatingting the User!</h2>
      </div>
    );
  }

  return (
    <>
      {addSuccess && (
        <div>
          <h2>User Added!</h2>
        </div>
      )}
      {editSuccess && (
        <div>
          <h2>User Updated!</h2>
        </div>
      )}
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
      <form>
        <div className="form-group">
          <h5>Post Title</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h5>Post Content</h5>
          <textarea
            placeholder="Enter Content..."
            rows="8"
            cols="100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={handleCreatePost}>
          Submit
        </button>
      </form>
    </>
  );
};

export default PostForm;
