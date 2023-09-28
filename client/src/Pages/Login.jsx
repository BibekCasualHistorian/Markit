// import React, { Component } from 'react';
// import '../CSS/Login.css'; // Import your CSS file

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleLogin = (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     if (email === 'student@gmail.com' && password === '1234') {
//       // Redirect to the details page
//       window.location.href = 'details.html';
//     } else {
//       alert('Invalid username and password');
//     }
//   };

//   render() {
//     return (
//       <div  className="bg-gradient-to-b from-[#42275a] to-[#734b6d]" >
//       <div className="wrapper bg-gradient-to-b from-[#42275a] to-[#734b6d] ">
//         <div className="form-box login">
//           <h2>Login</h2>
//           <form action="#" className="myform">
//             <div className="input-box">
//               <span className="icon">
//                 {/* Include your ion-icons component here */}
//               </span>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={this.state.email}
//                 onChange={this.handleInputChange}
//                 required
//               />
//               <label htmlFor="email">Email</label>
//             </div>
//             <div className="input-box">
//               <span className="icon">
//                 {/* Include your ion-icons component here */}
//               </span>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 required
//               />
//               <label htmlFor="password">Password</label>
//             </div>
//             <div className="remember-forgot">
//               <label>
//                 <input type="checkbox" /> Remember me
//               </label>
//               <a href="#">Forget Password</a>
//             </div>
//             <button type="submit" className="bn" onClick={this.handleLogin}>
//               Login
//             </button>
//             <div className="login-register">
//               <p>
//                 Dont have an account?
//                 <a href="./Pages/Login.jsx" className="register-link">
//                   Register
//                 </a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default Login;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/Login.css'; // Import your CSS file

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === 'student@gmail.com' && password === '1234') {
      // Redirect to the details page
      window.location.href = 'details.html';
    } else {
      alert('Invalid username and password');
    }
  };

  render() {
    return (
        <div className="wrapper bg-gradient-to-b from-[#42275a] to-[#734b6d]">
          <div className="form-box login">
            <h2>Login</h2>
            <form action="#" className="myform">
              <div className="input-box">
                <span className="icon">{/* Include your ion-icons component here */}</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-box">
                <span className="icon">{/* Include your ion-icons component here */}</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forget Password</a>
              </div>
              <button type="submit" className="bn" onClick={this.handleLogin}>
                Login
              </button>
              <div className="login-register">
                <p>
                  Dont have an account?
                  <Link to="/Register" className="register-link"> {/* Use Link here */}
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default Login;
