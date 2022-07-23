import {useContext} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { UserContext } from '../../context/UserContext';

const Login = () => {

  const url = 'http://localhost:3001/api/v1/auth/login'
  const {user, setUser} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data)
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      setUser(res.data)
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
    </div>
  )
}

export default Login