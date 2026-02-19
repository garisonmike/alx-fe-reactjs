import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Error fetching posts");
  }

  return response.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <button onClick={refetch} style={{ marginBottom: "15px" }}>
        Refetch Posts
      </button>

      {isFetching && <p>Updating data...</p>}

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
