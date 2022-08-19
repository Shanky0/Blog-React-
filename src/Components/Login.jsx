import React from 'react'
import '../App.css'
const Login = () => {
  return (
    <>
      <div id='registerContainer'>
        <h1 style={{ textAlign: "center", fontSize: "3vw", paddingTop: "5vh" }}>Log In</h1>
        <form id='registerForm'>
          <div>
            <h1>Email-Id</h1>
            <input type='email' placeholder='email' require />
            <h1>User Name </h1>
            <input type='text' placeholder='username' require />
            <h1> Password </h1>
            <input type='password' placeholder='password' require />
            <button> Login </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login