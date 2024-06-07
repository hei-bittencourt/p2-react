import React, { useContext } from "react";
import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";
import { FilterButton } from "../Button";
import { CategoryContext } from "../../contexts/CategoryContext";

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

export const HeaderMarket = () => {

    const  {category, setCategory } = useContext(CategoryContext);
    const location = useLocation();
    

    function escolherCategoria (selectedCategory) {
        setCategory(selectedCategory)
      }

      const handleClick = (title) => {
        if  (location.pathname === '/marketplace') {
            escolherCategoria(title === "Personagens" ? 'personagem' : 'anime');
        } else  {
            window.location.href ='/marketplace';
            escolherCategoria(title === "Personagens" ? 'personagem' : 'anime');
        }
    };
    

    return (
        <header className={styles.header}>
            <Link className={styles.nomeLoja} to="/">Loja NFTs</Link>
            <nav>           
            <FilterButton title={"Personagens"} onClick={() => handleClick('Personagens')} />
            <FilterButton title={"Animes"} onClick={() => handleClick('Animes')} />
            <Link to="/marketplace/lendarias">Lendárias</Link>
            <Link to="/carrinho">Carrinho</Link>
            </nav>
        </header>
    )
}

