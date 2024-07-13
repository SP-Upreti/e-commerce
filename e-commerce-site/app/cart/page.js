"use client"
import { useEffect, useState } from 'react';

export default function Page() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="px-16 py-32">
            <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 border-b pb-4">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                            <div className="flex-1">
                                <h2 className="font-bold text-xl">{item.title}</h2>
                                <p>Rs.{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
