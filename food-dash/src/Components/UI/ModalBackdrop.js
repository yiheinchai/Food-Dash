import styles from "./ModalBackDrop.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const ModalBackDrop = () => {
  const cartContext = useContext(CartContext);
  return <div onClick={cartContext.toggleCartDisplayHandler} class={styles.backdrop}></div>;
};

export default ModalBackDrop;
