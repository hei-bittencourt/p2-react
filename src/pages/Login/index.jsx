import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import { getUser } from '../../services/userApi/index.jsx';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext.jsx';


export const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const { saveUser } = useContext(UserContext)

  const userExists = async (email, password) => {
    try {
      const response = await getUser();
      const users = response.data;

      const user = users.find((user) => user.body.email == email && user.body.password == password);

      return user || null;
    } catch (error) {
      console.error('Erro ao verificar usuário:', error);
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    const user = await userExists(email, password);

    if (user) {
      saveUser(user.body);
      alert('Logado com sucesso!')
      navigate('/')
    } else {
      alert('Dados incorretos.')
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  return (
    <div className={styles.containerPrincipal}>
      <h2>Log In</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};