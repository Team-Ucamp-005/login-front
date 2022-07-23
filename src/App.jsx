import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import { UserProvider } from './context/UserProvider';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/signup' element = {<SignUp />}/>
      </Routes>
    </UserProvider>
  )
}

export default App
