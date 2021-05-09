import styles from "./Splash.module.css";
import splash_img from "../images/buffet.jpeg";

const Splash = () => {
  return (
    <div class={styles.splash}>
      <img src={splash_img} class={styles["splash__background"]}></img>
      <div class={styles["splash__content"]}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose our favourite meal from our broad selection of available meals and enjoy a
          delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default Splash;
