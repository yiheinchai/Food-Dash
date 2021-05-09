import styles from "./Button.module.css";

const Button = (props) => {
  function onClickHandler(event) {
    event.preventDefault();
    props.btnHandler(props.itemInfo);
  }
  return (
    <button
      onClick={onClickHandler}
      className={`${styles.button} ${styles[props.size]} ${styles[props.color]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
