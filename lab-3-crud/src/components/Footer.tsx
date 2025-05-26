const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
        backgroundColor: "#f1f1f1",
        fontSize: "0.9rem"
      }}
    >
      © {new Date().getFullYear()} Julio's Blog App. All rights reserved.
    </footer>
  )
}

export default Footer
