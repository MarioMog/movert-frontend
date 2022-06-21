import React from 'react'
import FormLogin from '../../components/FormLogin'
import './style.css'
const Login = () => {
  return (
    <>
      <div className="main-container">
        <div className="login-container">
          <h1>Login</h1>
          <FormLogin />
        </div>
      </div>
    </>
  )
}

export default Login
