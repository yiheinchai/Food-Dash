import FoodList from "./Food/FoodList";
import Splash from "./Splash/Splash";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Splash />
      <FoodList></FoodList>
    </div>
  );
};

export default Main;
