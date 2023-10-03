

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Login.css';
import { AuthContext } from '../store/AuthContext';

const Login = () => {

  const { dispatch } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      const datas = {
        email,
        password
      }
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datas),
      })
      if(res.ok) {
        const data = await res.json()
        localStorage.setItem("user", JSON.stringify(data))
        dispatch({type: "LOGIN", payload: data})
      }
      if(!res.ok) {
        const data = await res.json()
        setError(data.error)
      }
    }
    postData()
  }

  return (
    <div className="wrapper bg-gradient-to-b from-[#42275a] to-[#734b6d]">
      <div className="form-box login">
        <h2>Login</h2>

        <form action="#" className="myform" onSubmit={handleSubmit}>

          <div className="input-box">
            <span className="icon">{/* Include your ion-icons component here */}</span>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-box">
            <span className="icon">{/* Include your ion-icons component here */}</span>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            {/* <a href="#">Forget Password</a> */}
          </div>

          <button type="submit" className="bn">Login</button>

          <div className="login-register">
            <p>
              Dont have an account?
              <Link to="/Register" className="register-link">
                Register
              </Link>
            </p>
          </div>

          {
            error && <p>{error}</p>
          }
        </form>

        
      </div>
    </div>
  );
};

export default Login;
