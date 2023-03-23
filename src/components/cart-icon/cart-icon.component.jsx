import { useContext } from 'react';
import { ReactComponent as CartIconImage } from '../../assets/images/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartProducts } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartIconImage className='shopping-icon' />
      <span className="item-count">
        { cartProducts.reduce((total, product) => total += product.quantity, 0) }
      </span>
    </div>
  )
};

export default CartIcon;
