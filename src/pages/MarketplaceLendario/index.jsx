import React from "react";
import styles from "./styles.module.css";
import { Card } from "../../components/Card";
import { cards } from "../../services/cardsData";

export const MarketplaceLendario = () => {
  return (
    <div className={styles.container}>
      <h1>Marketplace</h1>
      <section className={styles.catalogo}>
        {cards.map((data, index) => { 
            return (
              <Card key={index} cardProps={data} />
            )}
        )}
      </section>
    </div>
  );
};