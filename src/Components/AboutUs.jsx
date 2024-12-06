// import Title from "./Title"

function AboutUs() {
    return (
        <div className="container mx-auto">
            <div className=" bg-[#FFF] p-4 flex flex-col lg:flex-row items-center lg:justify-between">
                {/* Left Section: Image and Overlay */}
                <div className="relative flex-1 flex justify-center lg:justify-start items-center">
                    {/* Circular Background */}
                    <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full -z-10  rounded-b-full rounded-r-full bg-[#749b3f]"></div>

                    {/* Image */}
                    <img
                        src="https://i.ibb.co.com/HYKh3CG/Image-4.png" // Replace with your image URL
                        alt="Fresh Harvest"
                        className="rounded-lg "
                    />

                    {/* Overlay Card */}
                    <div className="absolute bottom-0 right-28 bg-[#FFF] rounded-lg shadow-lg p-3 flex-col items-center text-center gap-4">
                        <img
                            src="https://i.ibb.co.com/kctzkjZ/16-1.png" // Replace with mushroom image URL
                            alt="Mushroom"
                            className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                            <p className="text-lg font-semibold">Mushroom</p>
                            <p className="text-gray-500 text-sm">52.3g</p>
                            <button className="hover:bg-orange-500 border border-orange-500 hover:text-white text-black text-sm px-4 py-1 rounded-md mt-2 transition-all duration-300">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section: About Us */}
                <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
                    <div className="border-l-4 border-[#749b3f] pl-4">
                        <p className="text-sm text-[#749b3f] font-medium uppercase">About us</p>
                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            About Fresh Harvest
                        </h2>
                    </div>
                    <p className="text-gray-600 mt-4">
                        Welcome to Fresh Harvest, your premier destination for high-quality and
                        fresh produce. We are passionate about providing you with the finest
                        fruits, vegetables, and salad ingredients to nourish your body and delight
                        your taste buds. With a commitment to excellence, sustainability, and
                        customer satisfaction, Fresh Harvest is here to revolutionize your grocery
                        shopping experience.
                    </p>
                    <button className="mt-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs