import { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    stock: "",
    images: null,
    categoryId: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and API integration here
    console.log(formData);
    alert("Product submitted!");
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter product name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter product description"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              placeholder="Enter stock quantity"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
              value={formData.stock}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Category ID */}
          <div>
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-700"
            >
              Category ID
            </label>
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              placeholder="Enter category ID"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
              value={formData.categoryId}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Images */}
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 focus:outline-none"
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
