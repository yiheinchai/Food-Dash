import Price from "./Price";
import styles from "./FoodItem.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const FoodItem = (props) => {
  const cartContext = useContext(CartContext);
  return (
    <li className={styles["food__item"]}>
      <div className={styles["food__details"]}>
        <h4>{props.itemInfo.name}</h4>
        <i>{props.itemInfo.description}</i>
        <Price>{props.itemInfo.price}</Price>
      </div>
      <form className={styles["food__controls"]}>
        <div className={styles["food__amount"]}>
          <h4>Amount</h4>{" "}
          <Input
            itemInfo={props.itemInfo}
            type="number"
            modifyAmount={cartContext.modifyAmountHandler}
            amount={props.itemInfo.amount}
          />
        </div>
        <Button itemInfo={props.itemInfo} btnHandler={cartContext.addtoCartHandler} color="light">
          + Add
        </Button>
      </form>
    </li>
  );
};

export default FoodItem;
