import React, { useState, useReducer } from "react";

const CartContext = React.createContext({
  menu: [],
});

function foodReducer(state, action) {
  if (action.type === "ADD_FOOD") {
    const findExisting = state.cartItems.find((ele) => ele.name === action.item.name);
    if (findExisting) {
      const newCart = state.cartItems.map((ele) => {
        if (ele.name != action.item.name) return ele;
        return { ...ele, amount: ele.amount + action.item.amount };
      });
      return { ...state, cartItems: newCart };
    }
    return { ...state, cartItems: [...state.cartItems, action.item] };
  }
  if (action.type === "DELETE_FOOD") {
    const findExisting = state.cartItems.find((ele) => ele.name === action.item.name);
    if (findExisting.amount <= 1) {
      return {
        ...state,
        cartItems: [...state.cartItems.filter((ele) => ele.name != action.item.name)],
      };
    }
    if (findExisting.amount > 1) {
      const newCart = state.cartItems.map((ele) => {
        if (ele.name != action.item.name) return ele;
        return { ...ele, amount: ele.amount - 1 };
      });
      return { ...state, cartItems: newCart };
    }
  }

  //   if (action.type === "DELETE_FOOD") {
  //     return {
  //       ...state,
  //       cartItems: [...state.cartItems.filter((ele) => ele.name != action.item.name)],
  //     };
  //   }

  if (action.type === "MODIFY_AMOUNT") {
    return {
      ...state,
      menu: state.menu.map((ele) => {
        if (ele.name === action.item.name) return action.item;
        return ele;
      }),
    };
  }

  if (action.type === "TOGGLE_CART") {
    return {
      ...state,
      cartDisplay: !state.cartDisplay,
    };
  }
}

export const CartContextProvider = (props) => {
  const [foodData, dispatchFood] = useReducer(foodReducer, {
    cartItems: [],
    menu: [
      { name: "Sushi", description: "Our Japanese specialty!", price: "$22.99", amount: 1 },
      { name: "Schnitzel", description: "A german specialty!", price: "$16.50", amount: 1 },
      { name: "Barbecue Burger", description: "American, raw, meaty", price: "$12.99", amount: 1 },
      { name: "Green Bowl", description: "Healthy...and green...", price: "$18.99", amount: 1 },
    ],
    cartDisplay: false,
  });

  const deletefromCartHandler = (item) => {
    dispatchFood({ type: "DELETE_FOOD", item });
  };

  const addtoCartHandler = (item) => {
    dispatchFood({ type: "ADD_FOOD", item });
    console.log(foodData);
  };

  const modifyAmountHandler = (item) => {
    dispatchFood({ type: "MODIFY_AMOUNT", item });
    console.log(foodData.menu);
  };

  const toggleCartDisplayHandler = () => {
    console.log(foodData);
    dispatchFood({ type: "TOGGLE_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        foodData,
        addtoCartHandler,
        deletefromCartHandler,
        modifyAmountHandler,
        toggleCartDisplayHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
