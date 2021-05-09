import Button from "../UI/Button";
import CartBtn from "./CartBtn";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>FoodDash</h1>
      <Button size="large" color="dark">
        <CartBtn />
      </Button>
    </div>
  );
};

export default Header;
