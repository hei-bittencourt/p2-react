/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {postUser} from '../../services/userApi/index.jsx'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import { HeaderRegister } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userData)
    postUser(userData)
    navigate('/login')
  };

  return (
    <div className={styles.containerPrincipal}>
      <HeaderRegister />

      <section className={styles.body}>

        <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h1>Registrar</h1>

          <label>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={userData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={userData.password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};