
import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import { getUser } from "../../services/userApi/index.jsx";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext.jsx";
import { HeaderLogin } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { toast } from "react-toastify";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { saveUser } = useContext(UserContext);

  const userExists = async (email, password) => {
    try {
      const response = await getUser();
      const users = response.data;

      const user = users.find(
        (user) => user.body.email == email && user.body.password == password
      );

      return user || null;
    } catch (error) {
      console.error("Erro ao verificar usuário:", error);
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    const user = await userExists(email, password);

    if (user) {
      saveUser(user.body);
      toast.success("Logado com sucesso!");
      navigate("/");
    } else {
      toast.error("Dados incorretos.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className={styles.containerPrincipal}>
      <HeaderLogin />
      <section className={styles.body}>
        <div className={styles.containerForm}>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <h1>Login</h1>

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

            <div className={styles.recallForget}>
              <a href="#">Esqueceu sua senha?</a>
            </div>

            <button type="submit">Entrar</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};