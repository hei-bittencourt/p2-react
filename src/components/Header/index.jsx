import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
    
    return (
        <header className={styles.header}>
            <Link className={styles.nomeLoja} to="/">Loja NFTs</Link>
            <nav>
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/carrinho">Carrinho</Link>
            </nav>
        </header>
    );
};

