import CartBtn from "./CartBtn";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>FoodDash</h1>
      <CartBtn />
    </div>
  );
};

export default Header;
