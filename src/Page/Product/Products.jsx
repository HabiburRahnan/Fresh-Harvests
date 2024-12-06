import { useLoaderData } from "react-router-dom";
import { useState } from "react"; // Import useState
import Title from "../../Components/Title";
import { useGetProductQuery } from "../../redux/api/product";

function Products() {
    const { data, error, isLoading } = useGetProductQuery();
    const items = useLoaderData();
    const [quantity, setQuantity] = useState(1); // State to track quantity

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { productName, description, images } = items?.data || {};

    // Handler for increasing the quantity
    const increaseQuantity = () => setQuantity((prev) => prev + 1);

    // Handler for decreasing the quantity
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevents quantity below 1

    return (
        <div className="container mx-auto">
            <section className="py-10 px-6 md:px-12 lg:px-20 bg-white">
                {/* Product Section */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow">
                            <img
                                src={images?.[0]}
                                alt="Product"
                                className="w-full rounded-lg"
                            />
                        </div>
                        {/* Image Navigation Dots */}
                        <div className="mt-4 flex items-center justify-center space-x-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        {/* Product Category */}
                        <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                            Fruits
                        </span>

                        {/* Product Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            {productName}
                        </h1>

                        {/* Rating and Price */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center text-yellow-500">
                                ★★★★★
                                <span className="text-gray-600 text-sm ml-2">(5.0 reviews)</span>
                            </div>
                            <span className="text-2xl font-bold text-green-600">$6.3/kg</span>
                        </div>

                        {/* Product Description */}
                        <p className="text-gray-600 mt-4">{description}</p>

                        {/* Quantity Selector */}
                        <div className="mt-6 flex items-center space-x-4">
                            <label htmlFor="quantity" className="text-gray-800 font-semibold">
                                Quantity:
                            </label>
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <button
                                    onClick={decreaseQuantity} // Attach decrease handler
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                                >
                                    -
                                </button>
                                <input
                                    id="quantity"
                                    type="number"
                                    value={quantity} // Bind to state
                                    readOnly // Prevent manual editing
                                    className="w-12 text-center border-0 focus:ring-0 focus:outline-none"
                                />
                                <button
                                    onClick={increaseQuantity} // Attach increase handler
                                    className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex space-x-4">
                            <button className="flex-1 bg-gray-200 text-gray-800 font-medium py-3 rounded-lg hover:bg-gray-300">
                                Save as Favorite
                            </button>
                            <button className="flex-1 bg-orange-500 text-white font-medium py-3 rounded-lg hover:bg-orange-600">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-10 max-w-5xl mx-auto">
                    <div className="flex border-b">
                        <button className="py-2 px-4 text-green-600 border-b-2 border-green-600 font-semibold">
                            Description
                        </button>
                        <button className="py-2 px-4 text-gray-600 hover:text-green-600">
                            Reviews (1)
                        </button>
                    </div>
                    {/* Tab Content */}
                    <div className="mt-6">
                        <p className="text-gray-700">
                            Our coconuts are sustainably grown, ensuring the best quality and
                            taste. Each coconut is handpicked and carefully prepared, offering
                            you the freshest product possible. Rich in healthy fats,
                            electrolytes, and essential nutrients, coconuts provide both
                            hydration and nourishment. Whether you’re using the water, flesh, or
                            milk, our coconuts bring versatility to your kitchen while
                            supporting healthy living.
                        </p>
                        <p className="mt-4">
                            Perfect for smoothies, desserts, curries, and more — let the natural
                            sweetness of the coconut elevate your recipes. Enjoy the tropical
                            goodness in its purest form, directly from nature.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <Title name="Our Products" title="Related products"></Title>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-12 px-2">
                {data?.data?.slice(0, 4).map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 max-w-xs w-full">
                        {/* Image */}
                        <div className="flex justify-center">
                            <img
                                src={item?.images[0]}
                                alt={item?.productName}
                                className="h-32 w-32 object-contain bg-white"
                            />
                        </div>

                        {/* Product Name */}
                        <h2 className="text-lg font-semibold text-gray-800 text-center mt-4">
                            {item?.productName}
                        </h2>

                        {/* Product Price */}
                        <p className="text-gray-500 text-center text-sm">${item?.price}/kg</p>

                        {/* Add to Cart Button */}
                        <button className="mt-4 w-full py-2 bg-[#FF6A1A] text-white rounded-lg font-medium hover:bg-[#FF6A1A] transition">
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
