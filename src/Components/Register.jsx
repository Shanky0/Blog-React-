import React from 'react';
import '../App.css'

const Register = () => {
  return (
    <>
      <div id='registerContainer'>
      <h1 style={{textAlign:"center",fontSize:"3vw",paddingTop:"5vh"}}>Register</h1>
        <form id='registerForm'>
          <div>
          <h1>Email-Id</h1>
          <input type='email' placeholder='email' require />
          <h1>User Name </h1>
          <input type='text' placeholder='username' require />
          <h1> Password </h1>
          <input type='password' placeholder='password' require />
          <h1> Re-Enter Password </h1>
          <input type='text' placeholder='password' require />
          <button> Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register