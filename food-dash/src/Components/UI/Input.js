import styles from "./Input.module.css";

const Input = (props) => {
  const onInputChangeHandler = (event) => {
    props.modifyAmount({ ...props.itemInfo, amount: +event.target.value });
  };

  return (
    <input onChange={onInputChangeHandler} value={props.amount} className={styles.input}></input>
  );
};

export default Input;
