// CartAction.js
export const addToCart = (product) => (dispatch) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const cartItem = {
      name: product.title,
      _id: product._id,
      image: event.target.result,
      price: product.price,
      catagory: product.catagory
    };

    dispatch({
      type: 'ADD_TO_CART',
      payload: cartItem,
    });
  };

//test
  console.log('product.image:', product.image);

 
  if (product.image instanceof Blob) {
    reader.readAsDataURL(product.image);
  } else if (typeof product.image === 'string') {
   
    const base64String = product.image.startsWith('data:') ? product.image : `data:image/jpeg;base64,${product.image}`;
    const blob = new Blob([Uint8Array.from(atob(base64String.split(',')[1]), (c) => c.charCodeAt(0))], { type: 'image/jpeg' });
    reader.readAsDataURL(blob);
  } else {
    console.error('Invalid image format.');
  }
};
export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
};