import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BlogList from "./pages/BlogList"
import BlogDetail from "./pages/BlogDetail"
import BlogForm from "./pages/BlogForm"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header firstname="Julio" />

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog/new" element={<BlogForm />} />
          <Route path="/blog/edit/:id" element={<BlogForm />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
