
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css'




export default function Navbar() {
  return (
    <nav className="nav" >
      {/* <img src=  height="100px" width="100px"/> */}
      <Link to="/" className="site-title">
        Cat G
      </Link>
      <ul>
        <CustomLink to="/Juegos">Juegos</CustomLink>
        <CustomLink to="/GiftCards">GiftCards</CustomLink>
        <CustomLink to="/Contacto">Contacto</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}