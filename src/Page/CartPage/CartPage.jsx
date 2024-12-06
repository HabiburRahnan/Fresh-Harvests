import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items from localStorage and update state
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    // Remove an item from the cart
    const removeFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    };

    // Calculate total price of all cart items
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    console.log(cartItems)
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold text-center">Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center mt-6">
                    <p>Your cart is empty.</p>
                    <Link to="/" className="text-orange-500">Go back to shop</Link>
                </div>
            ) : (
                <div className="mt-6">
                    <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between py-4 border-b">
                                <div className="flex items-center">
                                    <img src={item.images[0]} alt={item.
                                        productName} className="w-16 h-16 object-cover mr-4" />
                                    <div>
                                        <h3 className="font-semibold">{item.
                                            productName}</h3>
                                        <p className="text-gray-500">Price:${item.
                                            price
                                        }</p>
                                        <p className="text-gray-500">Quantity: {item.
                                            quantity}</p>
                                    </div>
                                </div>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeFromCart(item)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="flex justify-between mt-6">
                        <p className="font-semibold">Total:</p>
                        <p className="font-semibold text-xl">${calculateTotalPrice().toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between mt-6">
                        <Link to="/" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300">Continue Shopping</Link>

                        <button
                            to="/"
                            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                        // onAuxClick={}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
