import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
import Login from '../Login/Login';


const PrivateRoute = ({ path, component }) => {
  const { user } = useContext(UserContext)

  const isLoggedIn = !!user

  console.log(user)

  return (
    <Route path={path} component={() => isLoggedIn ? component : <Login />} />
    // <Route exact
    //   path={path}
    //   component={component}
    // />
  )
}

export default PrivateRoute