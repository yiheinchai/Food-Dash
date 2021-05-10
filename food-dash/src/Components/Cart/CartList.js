import ModalBackDrop from "../UI/ModalBackdrop";
import CartModal from "./CartModal";
import ReactDOM from "react-dom";
import styles from "./CartList.module.css";

const CartList = (props) => {
  return (
    <div className={styles.cartwrapper}>
      {ReactDOM.createPortal(
        <CartModal toggleCartDisplay={props.toggleCartDisplay} />,
        document.querySelector("#modal-root")
      )}
      {ReactDOM.createPortal(
        <ModalBackDrop toggleCartDisplay={props.toggleCartDisplay} />,
        document.querySelector("#backdrop-root")
      )}
    </div>
  );
};

export default CartList;
