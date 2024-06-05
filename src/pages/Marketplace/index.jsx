import React from 'react';
import styles from './styles.module.css';
import {Card} from '../../components/Card';
import image from '../../assets/image.png';

export const Marketplace = () => {
    return <div className={styles.container}>
        <h1>TESTE</h1>
      
        <Card
        title="Maria Teresa"
        price="0.01 BTC"
        img={image}
        />
    </div>
};