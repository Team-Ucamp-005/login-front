import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const navigation = useNavigate();
  const { user } = useContext(UserContext)


  useEffect(() => {
    console.log('------', user)
    if (!user) {
      console.log('aqui')
      navigation('/login')
    }
  }, [])


  return (
    <div>
      <h1>Bienvenido {user.username}</h1>

      <p>
        Nombre: <strong>{user.name}</strong>
        Username: <strong>{user.username}</strong>
        Email: <strong>{user.email}</strong>
      </p>


    </div>
  )
}

export default Profile