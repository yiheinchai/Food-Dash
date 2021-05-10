import Header from "./Header/Header";
import "./App.css";
import Main from "./Main";
import { CartContextProvider } from "../store/cart-context";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <Main />
    </CartContextProvider>
  );
};

export default App;
