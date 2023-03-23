import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product
  const { removeProductToCart, addProductToCart, clearProductFromCart } = useContext(CartContext);

  const removeProductHandler = () => removeProductToCart(product);
  const addProductHandler = () => addProductToCart(product);
  const clearProductHandler = () => clearProductFromCart(product);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{ name }</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeProductHandler}>
          &#10094;
        </div>
        <span className='value'>{ quantity }</span>
        <div className='arrow' onClick={addProductHandler}>
          &#10095;
        </div>
      </span >
      <span className='price'>${ price }</span>
      <div className='remove-button' onClick={clearProductHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;
