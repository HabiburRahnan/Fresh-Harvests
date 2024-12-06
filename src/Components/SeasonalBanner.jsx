
const SeasonalBanner = () => {
    return (
        <div className="container mx-auto bg-white shadow-md rounded-lg  p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gray-50 -z-10">
                {/* Decorative Background Elements */}
                <img
                    src="https://via.placeholder.com/600x200" // Replace with a background graphic URL
                    alt="decorative"
                    className="absolute w-full h-full object-cover opacity-10"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
                {/* Left Content */}
                <div>
                    {/* Special Offer */}
                    <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-md">
                        Special Offer
                    </span>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                        Seasonal Fruit Bundle
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg text-orange-500 font-semibold mt-2">
                        Discount up to <span className="text-3xl">80% OFF</span>
                    </p>

                    {/* Countdown Timer */}
                    <div className="mt-6 grid grid-cols-4 gap-2 text-center">
                        <div className="bg-gray-100 rounded-lg p-2">
                            <p className="text-2xl font-bold">03</p>
                            <p className="text-sm text-gray-600">Days</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2">
                            <p className="text-2xl font-bold">18</p>
                            <p className="text-sm text-gray-600">Hours</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2">
                            <p className="text-2xl font-bold">54</p>
                            <p className="text-sm text-gray-600">Min</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2">
                            <p className="text-2xl font-bold">21</p>
                            <p className="text-sm text-gray-600">Sec</p>
                        </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mt-6">
                        <p className="inline-block bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg">
                            CODE: FRUIT28
                        </p>
                    </div>
                </div>

                {/* Right Content: Fruits Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://via.placeholder.com/300x200" // Replace with your fruit image URL
                        alt="Seasonal Fruit Bundle"
                        className="max-w-full rounded-md shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default SeasonalBanner;
