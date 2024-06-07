import React from "react"
import styles from "./styles.module.css";
import gitHub from "../../assets/ImagemFooter/githubpng.png"

export const Footer = () => {
    return (
        <div className={styles.footer}>
                    <div className={styles.sbFooterLinksDiv}>
                            <div className={styles.NomeContainer}>
                                <a href="https://www.linkedin.com/in/giovanne-moreira-1158b3266/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <h4>Giovanne</h4>
                                </a>
                                <a href="https://github.com/GiovanneMoreiraHol">
                            <img className={styles.socialMedia2} src={gitHub} alt=""/>
                                </a>
                            </div>
                            <div className={styles.NomeContainer}>
                                <a href="https://www.linkedin.com/in/gustavopinheiro-/">
                            <h4>Gustavo</h4>
                            </a>
                            <a href="https://github.com/pinheir0g">
                            <img className={styles.socialMedia2} src={gitHub} alt=""/>
                            </a>
                            </div>
                            <div className={styles.NomeContainer}>
                                <a href="https://www.linkedin.com/in/heitor-bittencourt/">
                            <h4>Heitor</h4>
                            </a>
                            <a href="https://github.com/hei-bittencourt">
                            <img className={styles.socialMedia2} src={gitHub} alt=""/>
                            </a>
                            </div>
                            <div className={styles.NomeContainer}>
                                <a href="https://www.linkedin.com/in/kaiky-azevedo-de-oliveira-a1b1492b8/">
                            <h4>Kaiky</h4>
                            </a>
                            <a href="https://github.com/kaikyazz">
                            <img className={styles.socialMedia2} src={gitHub} alt=""/>
                            </a>
                            </div>
                            <div className={styles.NomeContainer}>
                                <a href="https://www.linkedin.com/in/kayque-lucas-dev/">
                            <h4>Kayque</h4>
                            </a>
                            <a href="https://github.com/KayqueLucas">
                            <img className={styles.socialMedia2} src={gitHub} alt=""/>
                            </a>
                            </div>
                            <div className={styles.NomeContainer}>
                                <a href="https://www.linkedin.com/in/nimello/">
                            <h4>Nicolle</h4>
                            </a>
                            <a href="https://github.com/nimello74">
                            <img className={styles.socialMedia2} src={gitHub} alt=""/>
                            </a>
                            </div>
                    </div>
                </div>
    )
}

