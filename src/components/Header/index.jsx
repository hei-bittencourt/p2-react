import React, { useContext } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { FilterButton } from "../Button";
import { CategoryContext } from "../../contexts/CategoryContext";
import { UserContext } from "../../contexts/userContext";

export const Header = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <Link className={styles.nomeLoja} to="/">
        NFTec
      </Link>
      {user ? (
        <p>
          Olá, <span>{user.name}</span>
        </p>
      ) : null}
      <nav>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/carrinho">Carrinho</Link>
        {user ? (
          <>
            <Link to="/login" onClick={logoutUser}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export const HeaderMarket = () => {
  const { user } = useContext(UserContext);
  const { setCategory } = useContext(CategoryContext);

  return (
    <header className={styles.header}>
      <Link className={styles.nomeLoja} to="/">
        NFTec
      </Link>
      {user ? (
        <p>
          Olá, <span>{user.name}</span>
        </p>
      ) : null}
      <nav>
        <FilterButton title={"Animes"} onClick={() => setCategory("anime")} />
        <FilterButton
          title={"Personagens"}
          onClick={() => setCategory("personagem")}
        />
        <FilterButton
          title={"Lendárias"}
          onClick={() => setCategory("lendarias")}
        />
        <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
};

export const HeaderLogin = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.nomeLoja} to="/">
        NFTec
      </Link>
      <nav>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export const HeaderRegister = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.nomeLoja} to="/">
        NFTec
      </Link>
      <nav></nav>
    </header>
  );
};
