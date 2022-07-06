import React from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { deletePost } from "../services/CRUD";
import "../styles/post.css";

const Post = ({ post }) => {
  const { mutate, isLoading, isError } = useMutation(deletePost);

  const handleDelete = (id) => {
    mutate(id);
  };
  if (isLoading) {
    return (
      <div className="card col-md-4" style={{ width: "18rem" }}>
        <h2>Deleting post....</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="card col-md-4" style={{ width: "18rem" }}>
        <h2>Error deleting post!</h2>
      </div>
    );
  }
  return (
    <div className="card col-md-4" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(post.id)}
          >
            Delete Post
          </button>
          <Link to="/updatePost" state={{ post: post }}>
            <button className="btn btn-info">Update Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
