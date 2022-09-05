import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BlogDetail } from '../App';
import '../App.css'
import userData from './Assets/userData.json'

const Login = () => {
  const navigate = useNavigate();
  const { setlogged, setOpenSnack } = BlogDetail();

  const login = () => {
    const email = document.querySelector("#email").value;
    const authorName = document.querySelector("#authorName").value;
    const pass = document.querySelector("#pass").value;
    var flag = true;
    userData.forEach((val) => {
      if (email.toLowerCase() === val.email.toLowerCase() && authorName.toLowerCase() === val.authorName.toLowerCase() && pass.toLowerCase() === val.pass.toLowerCase()) {
        setlogged({id: val.userId, user: authorName});
        setOpenSnack({ open: true, html: `Welcome ${authorName} `, time: 1500, severity: "success" });
        flag = false;
        navigate('/')
      }
    })

    if (flag) {
      setOpenSnack({ open: true, html: `Sorry!! No user found. `, time: 1500, severity: "success" });
    }

  }
  return (
    <>
      <div id='registerContainer'>
        <h1 style={{ textAlign: "center", fontSize: "3vw", paddingTop: "5vh" }}>Log In</h1>
        <form id='registerForm'>
          <div>
            <h1>Email-Id</h1>
            <input type='email' placeholder='email' required id='email' autoFocus />
            <h1>User Name </h1>
            <input type='text' placeholder='username' id='authorName' required />
            <h1> Password </h1>
            <input type='password' placeholder='password' id='pass' required />
            <button onClick={login}> Login </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login