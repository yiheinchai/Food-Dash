import { useContext } from "react";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

export default Modal;
