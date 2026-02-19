import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();
  return <h1>Viewing Blog Post ID: {postId}</h1>;
}

export default BlogPost;
