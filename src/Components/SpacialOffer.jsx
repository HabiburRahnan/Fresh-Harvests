
function SpacialOffer() {
  return (
    <div>
      
      {/* Special Offer Section */}
      <div className="py-0 flex justify-end md:justify-center lg:justify-end items-end bg-white">
        <div className="flex justify-end items-center bg-green-100 rounded-lg shadow-md md:px-1  lg:px-2 ">
          <div className="  text-center md:text-left">
            <p className="text-green-700 text-xs font-semibold">
              Special Offer
            </p>
            <h2 className=" text-sx md:text-sm  font-bold text-green-800">Fresh Salad</h2>
            <p className="text-gray-700 text-xs md:text-sm lg:text-base">
              Up to <span className="font-bold ">70% off</span>
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              <span className="font-semibold text-green-700">CODE:</span>
              FRESH25
            </p>
          </div>
          <div className=" flex justify-center ">
            <img
              src="https://i.ibb.co.com/JCSfKyT/Image-1.png"
              alt="Special Offer"
              className="rounded-full shadow-md w-16 md:w-20 lg:w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacialOffer;
