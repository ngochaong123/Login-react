import React, { useState } from 'react';
import "./App.css"
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', { username, password })
      .then(response => {
        console.log(response.data);
        // Handle successful login
      })
      .catch(error => {
        console.error(error.response.data);
        // Handle login error
      });
  };

  return (
    <div className='login-container'>

      <fornt className="fornt-login">
        <h1 style={{textAlign:"center",padding:"5px",color:"white"}}>Login</h1>
        <div className='space'>
           <label className='name-login'>Username </label>
          <input className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='space'>
          <label className='name-login'>Password </label>
          <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button onClick={handleLogin} className='buttton'>Login</button>
      </fornt>

    </div>
  );
}

export default App;
