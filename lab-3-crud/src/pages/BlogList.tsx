import { useNavigate } from "react-router-dom"
import { useBlog } from "../context/BlogContext"

const BlogList = () => {
  const { state } = useBlog()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Blog Listing</h1>
      <button onClick={() => navigate("/blog/new")}>Create New Post</button>
      <ul style={{ marginTop: "1rem" }}>
        {state.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          state.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> -{" "}
              <button onClick={() => navigate(`/blog/${post.id}`)}>
                View Details
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default BlogList
