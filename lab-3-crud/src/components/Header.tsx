import { memo } from "react"
import { Link } from "react-router-dom"

type HeaderProps = {
  firstname: string
}

const Header = ({ firstname }: HeaderProps) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#222",
        color: "#fff"
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/blog" style={{ color: "#fff", textDecoration: "none" }}>
          Blog
        </Link>
      </nav>
      <span style={{ fontWeight: "bold" }}>{firstname}</span>
    </header>
  )
}

export default memo(Header)