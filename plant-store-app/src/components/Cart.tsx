import React from 'react';
import { useCart } from '../hooks/useCart'; // Assuming a custom hook for cart management
import { CartItem } from '../types';

const Cart: React.FC = () => {
    const { cartItems, increaseItem, decreaseItem, removeItem, calculateTotal } = useCart();

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item: CartItem) => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => increaseItem(item.id)}>+</button>
                            <button onClick={() => decreaseItem(item.id)}>-</button>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h2>Total: ${calculateTotal()}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;