import FoodList from "./Food/FoodList";
import Splash from "./Splash/Splash";
import styles from "./Main.module.css";
import CartList from "./Cart/CartList";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Main = () => {
  const cartContext = useContext(CartContext);
  return (
    <div className={styles.main}>
      <Splash />
      <FoodList></FoodList>
    </div>
  );
};

export default Main;
