import styles from "./Price.module.css";

const Price = (props) => {
  return <div className={styles.price}>{props.children}</div>;
};

export default Price;
