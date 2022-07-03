import { createContext, useReducer, useEffect } from "react";
import ContextCart from "./ContextCart";
import { products } from "./Products";
import { reducer } from "./reducer";
import "./cart.css";

export const CartContext = createContext();
const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // TODO: To delete the individual elements from an Item Cart.
  const removeItem = (id) => {
    return dispatch({
      type: "Remove_ITEM",
      payload: id,
    });
  };

  // TODO: To clear the cart.
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  //TODO: Increment the item.

  const increment = (id) => {
    return dispatch({ type: "INCREMENT", payload: id });
  };

  //TODO: Decrement the item.
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  //TODO: we will use the UseEffect hook to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("😊");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};
export default Cart;
