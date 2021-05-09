import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "../Cart/CartItem";
import Food from "../Food/Food";
import FoodItem from "../Food/FoodItem";
import styles from "./Modal.module.css";

const Modal = () => {
  const cartContext = useContext(CartContext);

  return (
    <Food className={styles.modal}>
      {cartContext.foodData.cartItems.map((ele) => (
        <CartItem itemInfo={ele} />
      ))}
    </Food>
  );
};

export default Modal;
