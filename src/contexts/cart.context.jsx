import { createContext, useEffect, useState } from "react"

const addProductToCartProduct = (cartProducts, productToAdd) => {
  const productFound = cartProducts.find((cartProduct) => cartProduct.id === productToAdd.id);

  if (productFound) {
    return cartProducts.map((cartProduct) =>
      cartProduct.id === productToAdd.id
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct
    );
  }

  return [...cartProducts, { ...productToAdd, quantity: 1 }]
}

const removeProductToCartProducts = (cartProducts, productToRemove) => {
  if(productToRemove.quantity === 1)
    return clearProductFromCartProducts(cartProducts, productToRemove)

  return cartProducts.map((cartProduct) => {
    return cartProduct.id !== productToRemove.id
    ? cartProduct
    : { ...cartProduct, quantity: cartProduct.quantity - 1}
  });
};

const clearProductFromCartProducts = (cartProducts, productToClear) => {
  return cartProducts.filter((cartProduct) => cartProduct.id !== productToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartProducts: [],
  addProductToCart: () => null,
  removeProductToCart: () => null,
  clearProductFromCart: () => null,
  cartTotalPrice: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([])
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addProductToCart = (productToAdd) => {
    const newCartProducts = addProductToCartProduct(cartProducts, productToAdd);
    setCartProducts(newCartProducts);
  }

  const removeProductToCart = (productToRemove) => {
    const newCartProducts = removeProductToCartProducts(cartProducts, productToRemove);
    setCartProducts(newCartProducts);
  }

  const clearProductFromCart = (productToClear) => {
    const newCartProducts = clearProductFromCartProducts(cartProducts, productToClear);
    setCartProducts(newCartProducts);
  }

  useEffect(() => {
    const total = cartProducts.reduce((total, cartProduct) => {
      return total += (cartProduct.quantity * cartProduct.price)
    }, 0);

    setCartTotalPrice(total);
  }, [cartProducts]);

  const value = { isCartOpen, setIsCartOpen, cartProducts, addProductToCart, removeProductToCart, clearProductFromCart, cartTotalPrice }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
