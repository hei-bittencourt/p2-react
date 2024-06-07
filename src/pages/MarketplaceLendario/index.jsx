import React from "react";
import styles from "./styles.module.css";
import { Card } from "../../components/Card";
import { cards } from "../../Services/cardsData";
import { HeaderMarket } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const MarketplaceLendario = () => {
  return (
    <div className={styles.container}>
      <HeaderMarket /> 
      <section className={styles.body}>
        <div className={styles.catalogo}>
          {cards.map((data, index) => { 
            return (
              <Card key={index} cardProps={data} />
              )}
              )}
        </div>
      </section>
      <Footer />
    </div>
  );
};