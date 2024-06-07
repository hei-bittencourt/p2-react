import React from "react";
import styles from './styles.module.css';

export const BuyButton = ({title, ...rest}) => {
    return <button  className={styles.buyButton} {...rest}>
        {title}
    </button>
}

export const FilterButton = ({title, onClick}) => {
    return <button onClick={onClick} className={styles.filterButton}>
        {title}
    </button>
} 

export const RemoveButton = ({ title, ...rest }) => {
    return <button className={styles.removeButton} {...rest}>
        {title}
    </button>
}
export const FinalyButton = ({ title, ...rest }) => {
    return <button className={styles.finalyButton} {...rest}>
        {title}
    </button>
}


