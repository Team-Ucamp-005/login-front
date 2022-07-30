import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  let navigate = useNavigate()
  const { user } = useContext(UserContext)
  const isLoggedIn = !!user

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <>
      <h1>Profile</h1>
      {
        isLoggedIn ?
          (
            <>
              <p>
                <strong>Name:</strong> {user.username}
              </p>
            </>
          )
          :
          (
            <p>You are not logged in</p>
          )
      }
    </>
  )
}

export default Profile