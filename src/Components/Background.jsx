import SpacialOffer from "./SpacialOffer";

function Background() {
  return (
    <div className="container mx-auto bg-[url('https://i.ibb.co.com/YDLFGYZ/image.png ">
      <div className="relative w-full h-[83vh]  bg-white">
        {/* Left White Section */}
        <div className="absolute text-start top-0 left-0 w-2/3 h-full bg-white mt-16">
          {/* Decorative Leaves */}
          <img
            src="https://i.ibb.co.com/mN7jW4D/Rectangle-removebg-preview.png" // Replace with actual leaf image URL
            alt="Leaf"
            className="absolute top-10 left-10 w-6 h-6"
          />
          <img
            src="https://i.ibb.co.com/mN7jW4D/Rectangle-removebg-preview.png" // Replace with actual leaf image URL
            alt="Leaf"
            className="absolute top-20 right-10 w-6 h-6"
          />
          <img
            src="https://i.ibb.co.com/mN7jW4D/Rectangle-removebg-preview.png" // Replace with actual leaf image URL
            alt="Leaf"
            className="absolute bottom-20 left-16 w-6 h-6"
          />
          {/* Orange Accent */}
          <div className="absolute top-[30%] lg:top-[40%] text-start px-4 transform -translate-y-1/2 ">
            <div className="space-y-0 md:space-y-2 lg:space-y-4 ">
              <p className="text-green-600 text-sm font-medium ">
                Welcome to Fresh Harvest
              </p>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold  leading-snug space-x-6">
                Fresh Fruits and <br /> Vegetables
              </h1>
              <p className="text-gray-700 text-xs md:text-sm ">
                At Fresh Harvest, we are passionate about providing you with the
                freshest <br  /> and most flavorful fruits and vegetables.
              </p>
              <button className="px-2 md:px-3 lg:px-6 md:py-2 lg:py-3 bg-orange-500 text-white font-semibold rounded shadow-md hover:bg-orange-600">
                Shop Now
              </button>
            </div>
           <div className=" md:flex lg:flex-col gap-5 ">
            <div>
            <SpacialOffer></SpacialOffer>
            </div>
            <div className=" justify-end items-end text-xl px-2">
              <p>Download App:</p>
              <img
                className="w-40 lg:w-60 h-10 object-fit  lg:mt-1"
                src="https://i.ibb.co.com/9qJWJXk/image.png"
                alt=""
              />
            </div>
           </div>
          </div>
        </div>

        {/* Right Green Section */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#749B3F]">
          {/* Right Section */}
          <div className="relative object-cover flex justify-center ">
            <img
              src="https://i.ibb.co.com/K6cSDps/Image.png"
              alt="Fresh Produce"
              className="rounded-lg  top-0 right-0  md:w-full h-72 md:h-full md:mt-14 md:mr-[250px] lg:mr-[350px] object-fit md:p-2 mt-9 lg:mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
