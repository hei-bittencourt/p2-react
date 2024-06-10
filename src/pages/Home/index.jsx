import React from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <Header />
      <section className={styles.body}>
        <div className={styles.info}>
          <p>
            Os NFTs mais incriveis <br />
            de <span>Toda Web</span>
          </p>
        </div>
        <figure>
          <img
            className={styles.imgHome}
            src="../src/assets/ImagensHomePage/mariaNFT.png"
            alt="Maria Lendária"
          />
        </figure>
      </section>
      <Footer />
    </div>
  );
}