import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./screens/Posts";
import PostForm from "./screens/PostForm";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/createPost" element={<PostForm />} />
          <Route path="/updatePost" element={<PostForm />} />
        </Routes>
      </div>
    </Router>
  );
}
