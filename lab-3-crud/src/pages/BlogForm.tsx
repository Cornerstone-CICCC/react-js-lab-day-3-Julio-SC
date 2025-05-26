import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useBlog } from "../context/BlogContext"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import toast from "react-hot-toast"

const BlogForm = () => {
  const { id } = useParams()
  const location = useLocation()
  const { state, dispatch } = useBlog()
  const navigate = useNavigate()

  const isEditing = location.pathname.includes("edit")
  const postToEdit = state.find((p) => p.id === id)

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [published, setPublished] = useState(false)

  useEffect(() => {
    if (isEditing && postToEdit) {
      setTitle(postToEdit.title)
      setContent(postToEdit.content)
      setPublished(postToEdit.published)
    }
  }, [isEditing, postToEdit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing && postToEdit) {
      dispatch({
        type: "EDIT",
        payload: {
          ...postToEdit,
          title,
          content,
          published
        }
      })
      toast.success("Post updated!")
    } else {
      dispatch({
        type: "ADD",
        payload: {
          id: uuidv4(),
          title,
          content,
          published
        }
      })
      toast.success("Post created!")
    }

    navigate("/blog")
  }

  return (
    <div>
      <h1>{isEditing ? "Edit Post" : "Add New Post"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          Published
        </label>
        <br />
        <button type="submit">{isEditing ? "Update" : "Create"}</button>
      </form>
    </div>
  )
}

export default BlogForm
