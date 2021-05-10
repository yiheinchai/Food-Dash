import Header from "./Header/Header";
import "./App.css";
import Main from "./Main";
import CartContext, { CartContextProvider } from "../store/cart-context";
import ModalBackDrop from "./UI/ModalBackdrop";

const App = () => {
  const addtoCart = (item) => {};

  return (
    <CartContextProvider>
      <Header />
      <Main />
    </CartContextProvider>
  );
};

export default App;
