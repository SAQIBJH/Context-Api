import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser({ userName, password });
    };
  return (
      <div className='text-xl '>
          <input
              type='text'
              value={userName}
              placeholder='Username'
              name='userName'
              onChange={(e)=>setUserName(e.target.value)}
          />
          <input
              type='text'
              value={password}
              placeholder='Password'
              name='password'
              onChange={(e)=>setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Login</button>
      
    </div>
  )
}

export default Login
