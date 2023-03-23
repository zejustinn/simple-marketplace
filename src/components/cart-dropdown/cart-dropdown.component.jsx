import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartProducts } = useContext(CartContext);
  const navigate = useNavigate('');

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      {
        cartProducts.length !== 0
          ? (
            <Fragment>
              <div className='cart-items'>
                {
                  cartProducts.map((product) =>
                    <CartItem key={product.id} product={product} />
                  )
                }
              </div>

              <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
            </Fragment>
          )
          : (<div className='empty-message'>Cart is empty</div>)
      }
    </div>
  )
}

export default CartDropdown;
