import CountdownTimer from "./CountdownTimer";

const SeasonalBanner = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 154);


    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center py-12 bg-[url('https://i.ibb.co.com/k883fBw/image.png')]">
                <div className="md:flex  justify-center items-center md:space-x-10 md:gap-8 px-2">

                    <div className=" text-center md:text-start items-center  ">
                        <div className=" py-5 my-2">
                            <p className="text-sm text-[#749b3f] font-medium uppercase">About us</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
                                About Fresh Harvest
                            </h2>
                            <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></p>
                        </div>
                        <div className="flex mb-6 space-x-2">
                            <CountdownTimer targetDate={targetDate} />
                        </div>
                        <button className="bg-[#176d38] text-white px-4 py-2 rounded-md mb-6 font-bold">CODE : <span className="text-[#fac714]"> FRUIT28</span></button>
                    </div>
                     <div>
                        <img className="w-full h-96 rounded-md" src="https://i.ibb.co.com/gyyD0bQ/fruits.jpg " alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SeasonalBanner;
