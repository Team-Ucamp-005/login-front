import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = 'http://localhost:3001/api/v1/register'

  const onSubmit = data => {
    console.log(data);
    axios.post(url, data)
  }

  return (
    <>
      <h1>Sign Up</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">nombre</label>
        <input {...register("name", { required: true })} />
        <label htmlFor="">apellido</label>
        <input  {...register("lastname", { required: true })} />
        <label htmlFor="">nombre de usuario</label>
        <input  {...register("username", { required: true })} />
        <label htmlFor="">email</label>
        <input {...register("email", { required: true })} />
        <label htmlFor="">contraseña</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.lastName && <p>password is required</p>}
        <input type="submit" />
      </form>
    </>
  )
}

export default SignUp