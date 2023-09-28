import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/Register.css'; // Import your CSS file

class Register extends Component {
  render() {
    return (
      <div className="wrapper bg-gradient-to-b from-[#42275a] to-[#734b6d]">
        <div className="form-box Register">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                {/* Include your ion-icons component here */}
                <ion-icon name="person-sharp"></ion-icon>
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                {/* Include your ion-icons component here */}
                <ion-icon name="mail-unread"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                {/* Include your ion-icons component here */}
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to terms and conditions
              </label>
            </div>
            <button
              type="submit"
              id="submitBtn"
              value="Submit"
              className="bn"
            >
              Register
              <Link to="/DetailsForm"></Link> {/* Use Link here */}
            </button>
            <div className="login-register">
              <p>
                Already have an account?{' '}
                <Link to="/Login" className="login-link"> {/* Use Link here */}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
