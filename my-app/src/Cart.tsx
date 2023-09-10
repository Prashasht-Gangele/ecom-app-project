import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './cartSlice';

interface CartItem {
    product: Product;
    quantity: number;
  }
  
const Cart = () => {
  const cart = useSelector((state: CartItem[]) => state);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - Quantity: {item.quantity} - Total: ${item.product.price * item.quantity}
            <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove</button>
            <button onClick={() => handleIncreaseQuantity(item.product.id)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item.product.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
