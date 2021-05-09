import Button from "../UI/Button";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles["cart__item"]}>
      <div className={styles["cart__details"]}>
        <h3 className={styles["cart__name"]}>{props.itemInfo.name}</h3>
        <div className={styles["cart__numbers"]}>
          <h5 className={styles["cart__price"]}>{props.itemInfo.price}</h5>
          <div className={styles["cart__quantity"]}>x{props.itemInfo.amount}</div>
        </div>
      </div>
      <div className={styles["cart__controls"]}>
        <Button color="light">+</Button>
        <Button color="light">-</Button>
      </div>
    </div>
  );
};

export default CartItem;
