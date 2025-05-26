// src/reducers/blogReducer.ts
import type { BlogPost } from "../types/BlogPost"

type BlogAction =
  | { type: "ADD"; payload: BlogPost }
  | { type: "EDIT"; payload: BlogPost }
  | { type: "DELETE"; payload: string }

export const blogReducer = (state: BlogPost[], action: BlogAction): BlogPost[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
    case "EDIT":
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      )
    case "DELETE":
      return state.filter(post => post.id !== action.payload)
    default:
      return state
  }
}
