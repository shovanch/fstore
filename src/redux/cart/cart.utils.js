export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if cartItem exists already
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // If item exists already, increase quantity by 1
  // modify the cartitems object of the matching cartitem,
  // leave the rest just as it is
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If item doesn't exist
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemtoRemove) => {
  // Find the item to remove
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemtoRemove.id
  );

  // If the item quantity is 1, remove the whole item
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemtoRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
