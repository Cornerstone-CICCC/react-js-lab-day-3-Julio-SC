// src/context/BlogContext.tsx
import { createContext, useContext, useReducer } from "react"
import type { ReactNode } from "react"
import { blogReducer } from "../reducers/blogReducer"
import type { BlogPost } from "../types/BlogPost"

type BlogContextType = {
  state: BlogPost[]
  dispatch: React.Dispatch<any>
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(blogReducer, [])

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlog = () => {
  const context = useContext(BlogContext)
  if (!context) throw new Error("useBlog must be used within BlogProvider")
  return context
}
