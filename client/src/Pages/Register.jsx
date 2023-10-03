
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Register.css'; // Import your CSS file
import { AuthContext } from '../store/AuthContext';

const Register = () => {
  const { dispatch } = useContext(AuthContext)
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   function handleSubmit(e) {
      e.preventDefault();
      const data = {
        email, password
    }

      const postData = async() => {
        const res = await fetch("http://localhost:3000/user/register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json"
          }
        })

        if(res.ok) {
          const data = await res.json()
          console.log(data)
          localStorage.setItem("user", JSON.stringify(data))
          dispatch({type: "LOGIN", payload: data})
        }
        else {
        }
      }
      postData()
    }

  return (
    <div className="wrapper bg-gradient-to-b from-[#42275a] to-[#734b6d]">
      <div className="form-box Register">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>

          {/* <div className="input-box">
            <span className="icon">
              <ion-icon name="person-sharp"></ion-icon>
            </span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div> */}

          <div className="input-box">
            <span className="icon">
              {/* Include your ion-icons component here */}
              <ion-icon name="mail-unread"></ion-icon>
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              {/* Include your ion-icons component here */}
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <button type="submit" id="submitBtn" className="bn">
            Register
          </button>

          <div className="login-register">
            <p>
              Already have an account?{' '}
              <Link to="/Login" className="login-link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
