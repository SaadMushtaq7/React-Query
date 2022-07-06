import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fechAllPosts } from "../services/CRUD";
import Pagination from "../components/Pagination";
import Post from "../components/Post";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 6;
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;

  const { data, isLoading, isError } = useQuery(
    ["posts", currentPage],
    fechAllPosts
  );

  const currentFiles =
    data && data.data.slice(indexOfFirstFile, indexOfLastFile);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <h2>Error fetching files</h2>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
        <Link to="/createPost">
          <button className="btn btn-primary">Create Post</button>
        </Link>

        <div className="row">
          {currentFiles.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <Pagination
          filesPerPage={filesPerPage}
          totalFiles={data.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Posts;
