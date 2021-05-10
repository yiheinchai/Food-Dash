import CartList from "../Cart/CartList";
import Button from "../UI/Button";
import CartBtn from "./CartBtn";
import styles from "./Header.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = () => {
  const cartContext = useContext(CartContext);
  return (
    <div className={styles.header}>
      <h1>FoodDash</h1>
      <CartBtn />
    </div>
  );
};

export default Header;
