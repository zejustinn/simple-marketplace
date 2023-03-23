import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"

import './navigation.styles.scss'

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutUser = () => {
    setUser(null);
    alert("Logged out successfully");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to='/'>
          <Logo className="navigation-logo" />
        </Link>
        <div className="navigation-links">
          <Link to='/shop' className="navigation-link">Shop</Link>
          {
            user ?
              (<Link onClick={signOutUser} className="navigation-link">Sign out</Link>) :
              (<Link to='/auth' className="navigation-link">Sign in</Link>)
          }
          <CartIcon />
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
      <Outlet className="outlet-content" />
    </Fragment>
  )
}

export default Navigation
