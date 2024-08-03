export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

//add to cart
export const addToCartDispatch = (
  item,
  quantityCount,
  selectedProductColor
) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        quantity: quantityCount,
        selectedProductColor: selectedProductColor
          ? selectedProductColor
          : item.selectedProductColor
          ? item.selectedProductColor
          : null
      }
    });
  };
};

//decrease from cart
export const decreaseQuantityDispatch = item => {
  return dispatch => {
    dispatch({ type: DECREASE_QUANTITY, payload: item });
  };
};
//delete from cart
export const deleteFromCartDispatch = item => {
  return dispatch => {
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };
};
//delete all from cart
export const deleteAllFromCartDispatch = () => {
  return dispatch => {
    dispatch({ type: DELETE_ALL_FROM_CART });
  };
};

// get stock of cart item
export const cartItemStock = (item, color) => {
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation.filter(single => single.color === color)[0].stock;
  }
};
