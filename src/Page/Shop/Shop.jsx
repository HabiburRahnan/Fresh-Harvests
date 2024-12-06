import { useGetProductQuery } from "../../redux/api/product";
import { Link } from "react-router-dom";

function Shop() {


    const { data, error, isLoading } = useGetProductQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div className="container mx-auto py-10 px-2">
            <h2 className="text-3xl font-bold text-center text-gray-800 space-x-2 py-2">
                Our Shop
            </h2>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-10 px-2">
                {
                    data?.data?.map(item =>
                        <Link to={`/products/${item?.id}`} key={item.id} className="bg-white rounded-lg shadow-md p-4 max-w-xs w-full">
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
                                {item?.productName
                                }
                            </h2>

                            {/* Product Price */}
                            <p className="text-gray-500 text-center text-sm">${item?.price}/kg</p>

                            {/* Add to Cart Button */}
                            <button className="mt-4 w-full py-2 bg-[#FF6A1A] text-white rounded-lg font-medium hover:bg-[#FF6A1A] transition">
                                Add to cart
                            </button>
                        </Link>)
                }
            </div>
        </div>
    );
}



export default Shop