import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import { UserProvider } from './context/UserProvider';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <UserProvider>
      <PayPalScriptProvider
        options={{
          "client-id": 'AYEkdDboj7foFTwEpUaUz6K7TWW_cnl92WBSmCwpt02es1dYtT8VXOiFTW5SpAZTUPHFWLiiGIkrn1Kr',
          components: "buttons",
          currency: "USD"
        }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <PrivateRoute path='/profile' element={<Profile />} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </PayPalScriptProvider>
    </UserProvider>
  )
}

export default App
