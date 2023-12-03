import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Components/script.js";
import "./App.css"


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', { username, password })
      .then(response => {
        console.log(response.data);
        // Handle successful login
        navigate('/Chatbot');
      })
      .catch(error => {
        console.error(error.response.data);
        // Handle login error
      });
  };

  return (
    <div class="container" id="container">
        <div class="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div class="social-icons">
                    <a class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="icon"><i class="fa-brands fa-github"></i></a>
                    <a class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <div class="social-icons">
                    <a class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="icon"><i class="fa-brands fa-github"></i></a>
                    <a class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email"  value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <a href="#">Forget Your Password?</a>
                <button onClick={handleLogin} className='buttton'>Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button class="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
