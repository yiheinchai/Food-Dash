import styles from "./ModalBackDrop.module.css";

const ModalBackDrop = (props) => {
  return <div onClick={props.toggleCartDisplay} className={styles.backdrop}></div>;
};

export default ModalBackDrop;
