import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { getCharacter } from "../../services/animeApi";
import { Card } from "../../components/Card";
import { generateRandomPrice } from "../../functions/generateRandomPrice";
import { HeaderMarket } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CategoryContext } from "../../contexts/CategoryContext";
import { cards } from "../../services/cardsData";

export const Marketplace = () => {
  const [characterList, setCharacterList] = useState([]);
  const { category } = useContext(CategoryContext);
 

  useEffect(() => {
    getApiData(category);
  }, [category]);

  const getApiData = async (category) => {
    if (category == "personagem" || category == "anime") {
      try {
        const response = await getCharacter(category);
        const results = response.data.data;
        const resultsToCard = results.map((item) => ({
          title: category == "personagem" ? item.name : item.title,
          price: generateRandomPrice(),
          img: item.images.jpg.image_url,
          raridade: "comum",
        }));
        setCharacterList(resultsToCard);
      } catch {
        console.log("deu erro");
      }
    } else {
      setCharacterList(cards);
    }
  };
  return (
    <div className={styles.containerPrincipal}>
      <div>
        <HeaderMarket />
      </div>
      <section className={styles.body}>
        <div className={styles.catalogo}>
          {characterList.map((data, index) => {
            return <Card key={index} cardProps={data} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};
