const init = () => {
  // Try to load the initial cart state from local storage
  const localCart = localStorage.getItem('cart');
  console.log(localCart)
  return localCart ? JSON.parse(localCart) : [];
};

const handleCart = (state = init(), action) => {
  let newState = [];
  switch (action.type) {
    case "ADDITEM":
    
      const productToAdd = action.payload;
      const exist = state.find((item) => 
      item.product._id === productToAdd._id);
     
      console.log('in addning item', action.payload, 'exist' , exist);
      if (exist) {
        // Product exists, update quantity
        newState = state.map((item) => 
          item.product._id === productToAdd._id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Product doesn't exist, add new product
        newState = [...state, { product: productToAdd, qty: 1 }];
      }
      break;

    case "DELITEM":
      const productToRemove = action.payload;
      const existInCart = state.find((item) => item.product._id === productToRemove._id);

      if (existInCart.qty === 1) {
        // If only 1 qty exists, filter out the product
        newState = state.filter((item) => item.product._id !== productToRemove._id);
      } else {
        // If more than 1 qty exists, decrease the qty
        newState = state.map((item) =>
          item.product._id === productToRemove._id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      break;

    default:
      return state; // In case of unknown action, return current state
  }

  // After state is updated, sync newState with local storage
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
};

export default handleCart;