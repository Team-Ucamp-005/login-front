import React, { useContext } from 'react'
import { UserContext } from "../../context/UserContext";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const { user } = useContext(UserContext)
  const isLoggedIn = !!user

  console.log(user)
  console.log(isLoggedIn)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/">
              Home
            </NavLink>
            {
              !isLoggedIn ?
                (
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to="/login">
                    Login
                  </NavLink>
                )
                :
                (
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to="/profile">
                    Profile
                  </NavLink>
                )
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar