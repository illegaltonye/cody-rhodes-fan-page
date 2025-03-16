import { Link } from 'react-router-dom'

function Navbar({ isAuthenticated, login, logout, user }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Cody Rhodes Fan Club</Link>
      <div className="nav-links">
        <Link to="/matches">Match History</Link>
        <Link to="/forum">Fan Forum</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/gallery">Gallery</Link>
        {isAuthenticated ? (
          <>
            <Link to="/membership">Membership</Link>
            <Link to="/customize">Customize</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <button onClick={() => login()}>Login</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar