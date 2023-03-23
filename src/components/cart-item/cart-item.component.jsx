import './cart-item.styles.scss'

const CartItem = ({ product: { id, name, imageUrl, quantity, price} }) => {
  return (
    <div key={id} className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <div className='name'>{name}</div>
        <div>{quantity} X {price}</div>
      </div>
    </div>
  )
}

export default CartItem;
