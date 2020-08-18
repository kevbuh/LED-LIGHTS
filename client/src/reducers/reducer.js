// import { useStateValue } from "../contexts/StateProvider";

export const initialState = {
  cart: [],
  // user: null,
};

export const getTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // const [{ cart }, dispatch] = useStateValue();
  switch (action.type) {
    case "ADD_TO_CART":
      // localStorage.setItem("cart", JSON.stringify(cart));
      // console.log("local to cart");
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cannot remove product (id: ${action.id})`);
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default reducer;
