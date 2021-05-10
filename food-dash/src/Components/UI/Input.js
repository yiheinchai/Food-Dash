import styles from "./Input.module.css";

const Input = (props) => {
  const onInputChangeHandler = (event) => {
    props.modifyAmount(event.target.value < 0 ? 1 : event.target.value);
  };

  return (
    <input
      type={props.type}
      onChange={onInputChangeHandler}
      value={props.amount}
      className={styles.input}
    ></input>
  );
};

export default Input;
