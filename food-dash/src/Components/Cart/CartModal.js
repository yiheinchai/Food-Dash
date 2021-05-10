import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./CartModal.module.css";

const CartModal = (props) => {
  const cartContext = useContext(CartContext);
  return (
    <Modal>
      {cartContext.foodData.cartItems.map((ele) => (
        <CartItem key={Math.random()} itemInfo={ele} />
      ))}
      <div className={styles["cart__price"]}>
        <h3>Total Amount</h3>
        <h3>
          $
          {cartContext.foodData.cartItems
            .reduce((acc, ele) => {
              const totalPrice = parseFloat(ele.price.slice(1)) * ele.amount;
              return (acc += totalPrice);
            }, 0)
            .toFixed(2)}
        </h3>
      </div>
      <div className={styles["cart__controls"]}>
        <Button btnHandler={props.toggleCartDisplay} size="large" variation="outline-rounded">
          Close
        </Button>
        <Button btnHandler={() => console.log("Ordering...")} size="large" color="light">
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default CartModal;
