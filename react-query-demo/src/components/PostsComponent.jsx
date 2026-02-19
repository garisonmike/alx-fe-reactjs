// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch function
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery(
    ["posts"],
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // Keep cached data for 5 minutes
      refetchOnWindowFocus: true, // Refetch when window gains focus
      keepPreviousData: true // Keep old data while fetching new
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts!</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>
      {isFetching && <p>Updating data...</p>}
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
