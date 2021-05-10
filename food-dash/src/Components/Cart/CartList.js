import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "../Cart/CartItem";
import { useContext } from "react";
import styles from "./CartList.module.css";
import Button from "../UI/Button";
import ModalBackDrop from "../UI/ModalBackdrop";

const CartList = () => {
  const cartContext = useContext(CartContext);
  return (
    <>
      <Modal>
        {cartContext.foodData.cartItems.map((ele) => (
          <CartItem itemInfo={ele} />
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
          <Button
            btnHandler={cartContext.toggleCartDisplayHandler}
            size="large"
            variation="outline-rounded"
          >
            Close
          </Button>
          <Button btnHandler={() => console.log("Ordering...")} size="large" color="light">
            Order
          </Button>
        </div>
      </Modal>
      <ModalBackDrop />
    </>
  );
};

export default CartList;
