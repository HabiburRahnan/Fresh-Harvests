// eslint-disable-next-line react/prop-types
function Title({ title, name }) {
    return (
        <div className="">
            <h1 className="text-center">
                <span className="text-lg px-2  rounded-md font-semibold    bg-[#cfdbbe] text-[#749B3F] ">
                    {name}
                </span>
            </h1>
            <h2 className="text-3xl font-bold text-center text-gray-800 space-x-2 py-2">
                {title}
            </h2>
        </div>
    );
}

export default Title;
