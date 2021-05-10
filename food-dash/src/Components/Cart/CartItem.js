import Button from "../UI/Button";
import Chip from "../UI/Chip";
import styles from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);
  const newItemInfo = { ...props.itemInfo, amount: 1 };
  return (
    <div className={styles["cart__item"]}>
      <div className={styles["cart__details"]}>
        <h3 className={styles["cart__name"]}>{props.itemInfo.name}</h3>
        <div className={styles["cart__numbers"]}>
          <h5 className={styles["cart__price"]}>{props.itemInfo.price}</h5>
          <Chip className={styles["cart__quantity"]}>x{props.itemInfo.amount}</Chip>
        </div>
      </div>
      <div className={styles["cart__controls"]}>
        <Button
          btnHandler={cartContext.deletefromCartHandler}
          itemInfo={props.itemInfo}
          variation="outline"
          color="light"
        >
          -
        </Button>
        <Button
          btnHandler={cartContext.addtoCartHandler}
          itemInfo={newItemInfo}
          variation="outline"
          color="light"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
