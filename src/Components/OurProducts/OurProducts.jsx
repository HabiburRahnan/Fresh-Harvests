import { useState } from "react";
import Title from "../Title";
import { useGetProductQuery } from "../../redux/api/product";
import { Link } from "react-router-dom";

function Products() {
  const [activeTab, setActiveTab] = useState("All");
  const { data, error, isLoading } = useGetProductQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // console.log(data.data[0].images[0])
  const tabs = ["All", "Fruits", "Vegetables", "Salad"];

  return (
    <div className="container mx-auto py-16 px-2">
      <Title name="Our Products" title="Our Fresh Products"></Title>
      <p className="text-center mx-auto">
        We pride ourselves on offering a wide variety of fresh and flavorful
        fruits,
        <br /> vegetables, and salad ingredients.
      </p>

      {/* Tabs */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium rounded-md ${activeTab === tab
              ? "bg-[#749B3F] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-10 px-2">
        {
          data?.data?.slice(0, 8).map(item =>
            <Link to={`/products/${item?.id}`} key={item.id}  className="bg-white rounded-lg shadow-md p-4 max-w-xs w-full">
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
      <div className="flex justify-center items-center">

        <button
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
        // onAuxClick={}
        >
          See All Products
        </button>
      </div>
    </div>
  );
}

export default Products;
