import React, { useState } from 'react';
import axios from 'axios';
import {postUser} from '../../services/cadastroApi/index.jsx'

export const SignUpPage = () => {
  const [name, setName] = useState(
  );
  const [email, setEmail] = useState(
  );
  const [password, setPassword] = useState(
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = {
      name : name,
      email : email,
      password : password,
    }
    
    console.log(usuario)
    postUser(usuario)
      
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

