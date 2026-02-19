// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// 1. Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // 2. Wrap your app with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
