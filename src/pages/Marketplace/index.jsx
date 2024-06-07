
import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { getCharacter } from '../../services/animeApi';
import { Card } from "../../components/Card";
import { generateRandomPrice } from "../../functions/generateRandomPrice";
import { FilterButton } from "../../components/Button";
import { UserContext } from "../../contexts/userContext";


export const Marketplace = () => {
  const [characterList, setCharacterList] = useState([])
  const [category, setCategory] = useState('anime');
  const {user} = useContext(UserContext);

  useEffect(() => {
    getApiData(category);
  }, [category]);

  const getApiData = async (category) => {
    try {
      const response = await getCharacter(category);
      const results = response.data.data;

      const resultsToCard = results.map((item) => ({
        title: category == 'personagem' ? item.name : item.title,
        price: generateRandomPrice(),
        img: item.images.jpg.image_url,
        raridade: 'comum'
      }));
      setCharacterList(resultsToCard);

    } catch {
      console.log('deu erro');
    }
  }

  return (
    <div className={styles.container}>
      <h1>Marketplace</h1>
      {user ? <p >{user.name}</p>: <p></p>}
      <FilterButton title={"Personagens"} onClick={() => setCategory('personagem')} />
      <FilterButton title={"Animes"} onClick={() => setCategory('anime')} />
      <section className={styles.catalogo}>
        {characterList.map((data, index) => {
          return (
            <Card key={index} cardProps={data} />
          )
        })}
      </section>
    </div>
  );
};