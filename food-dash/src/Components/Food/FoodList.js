import Food from "./Food";
import FoodItem from "./FoodItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const FoodList = () => {
  const cartContext = useContext(CartContext);

  return (
    <Food>
      {cartContext.foodData.menu.map((ele) => (
        <FoodItem key={Math.random()} itemInfo={ele} />
      ))}
    </Food>
  );
};

export default FoodList;
