import React from 'react';
import styles from './styles.module.css';
import { BuyButton } from '../Button';

export const Card = ({title, price, img}) => {
    return <div className={styles.card}>
        <div className={styles.content}>
            <img src={img} alt="" className={styles.image}/>
        </div>
        <div className={styles.cardFooter}>
            <div className={styles.info}>
                <p>{title} </p>
                <p> {price}</p>
            </div>
            <div>
            <BuyButton/>
            </div>
            
        </div>
    </div>
};