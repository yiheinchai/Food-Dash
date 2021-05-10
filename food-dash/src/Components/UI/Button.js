import styles from "./Button.module.css";

const Button = (props) => {
  function onClickHandler(event) {
    event.preventDefault();
    props.btnHandler({
      ...props.itemInfo,
      amount: +props.orderAmount,
    });
  }
  return (
    <button
      onClick={onClickHandler}
      className={`${styles.button} ${styles[props.size]} ${styles[props.variation]} ${
        styles[props.color]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
