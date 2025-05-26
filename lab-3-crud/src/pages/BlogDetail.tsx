import { useParams, useNavigate } from "react-router-dom"
import { useBlog } from "../context/BlogContext"
import toast from "react-hot-toast"

const BlogDetail = () => {
  const { id } = useParams()
  const { state, dispatch } = useBlog()
  const navigate = useNavigate()

  const post = state.find((p) => p.id === id)

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: id })
    toast.success("Post deleted!")
    navigate("/blog")
  }

  if (!post) return <p>Post not found.</p>

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Status: {post.published ? "Published" : "Draft"}</p>
      <button onClick={() => navigate(`/blog/edit/${post.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default BlogDetail
