import styles from "./Food.module.css";

const Food = (props) => {
  return <ul className={`${styles.food} ${props.className}`}>{props.children}</ul>;
};

export default Food;
