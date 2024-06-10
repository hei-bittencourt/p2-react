import React, {useContext} from "react";
import styles from "./styles.module.css";
import { BuyButton } from "../Button";
import { FaEthereum } from "react-icons/fa";
import { ContextoCarrinho } from './../../contexts/CarrinhoContext';
import { UserContext } from "../../contexts/userContext";
import { useNavigate, useLocation } from 'react-router-dom';
import { RemoveButton } from "../Button/index.jsx";
import { toast } from 'react-toastify';


export const Card = ({ cardProps }) => {
  const { adicionarItemCarrinho, removerItemCarrinho } = React.useContext(ContextoCarrinho)
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const click = () => {
    if(user){
      adicionarItemCarrinho({
        title: cardProps.title,
        price: cardProps.price,
        quantidade: 1,
        img: cardProps.img,
        raridade: cardProps.raridade
      }
    )
    toast.success('Item adicionado ao carrinho.');
    }else{
      toast.error('É preciso estar logado.');
      navigate('/login')
    }
  }

  const isLendario = cardProps.raridade != 'comum';

  return (
    <section className={isLendario ? styles.cardLendario: styles.card}>
      <div className={isLendario ? styles.contentLendario: styles.content}>
        <img src={cardProps.img} alt="" className={styles.image} />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.info}>
          <p>{cardProps.title} </p>
          <p>{cardProps.price} { <FaEthereum color="c0c0c0"/>} </p>
        </div>
        <div>
          {location.pathname == '/carrinho' ?(
              <RemoveButton title={"Remover"} 
              onClick={() => removerItemCarrinho(cardProps.title)}/>

          ): (
            <BuyButton  title = {"Buy"} onClick={click}  />
          )
          }
        </div>
      </div>
    </section>
  )
};