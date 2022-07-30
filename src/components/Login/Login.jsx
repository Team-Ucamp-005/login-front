import { useContext } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { UserContext } from '../../context/UserContext';
import { useNavigate, NavLink } from 'react-router-dom';

const Login = () => {

  const url = 'http://localhost:4000/api/v1/auth/login'
  const url2 = 'http://localhost:4000/api/v1/users/me'
  let navigate = useNavigate();
  // super@mail.com
  // kriptonita123
  // const url = process.env.API_URL
  const { user, setUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data)
    axios.post(url, data)
      .then(res => {
        console.log('******************')
        console.log(res.data)
        console.log('******************')
        return (axios.get(url2, {
          headers: {
            Authorization: `Bearer ${res.data.token}`
          }
        }).then(response => {
          setUser(response.data)
          navigate('/profile', { replace: true })
          console.log('------')
          console.log(response)
          console.log('------')
        }))
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email", { required: true })} />
          <input type="password" {...register("password", { required: true })} />
          {errors.lastName && <p>password is required</p>}
          <input type="submit" />
        </form>
      </div>
      <div>
        Crear una cuenta: <NavLink to="/signup">Register</NavLink>
      </div>
    </div>
  )
}

export default Login