import styles from "./Chip.module.css";

const Chip = (props) => {
  return <div className={styles.chip}>{props.children}</div>;
};

export default Chip;
