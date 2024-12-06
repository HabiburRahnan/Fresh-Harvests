import { useEffect, useState } from 'react'
import Title from './Title'
import { MdMessage, MdShare } from 'react-icons/md'

function OurBlog() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("/Blog.json")
            .then(data => data.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="bg-white">
            <Title name={"Our Blog"} title="Fresh Harvest Blog"></Title>
            <p className="text-center space-x-1 ">
                Welcome to the Fresh Harvest Blog, your go-to resource for all things <br /> related to fresh produce, healthy eating, and culinary inspiration.
            </p>

            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((item, index) =>
                        <div key={index} className="max-w-sm rounded overflow-hidden bg-white shadow-xl pb-5">
                            <div className="relative h-48">
                                <img className="w-full h-48 object-cover " src={item?.image} alt={item?.title} />
                                <div className=" absolute  bottom-0 left-0 w-full">
                                    <div className="flex justify-around items-center   bg-slate-900/60 w-full text-white py-1">
                                        <div className="flex justify-center items-center gap-2">
                                            <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/L9vJkVq/camera.jpg" alt="" />
                                            <p >Mr. Habib</p>
                                        </div>
                                        <div className="flex justify-center items-end gap-4">
                                            <MdMessage className='text-2xl text-orange-500' />
                                            <MdShare className='text-2xl text-orange-500' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-6 py-4 h-40">
                                <div className="font-bold text-lg mb-2">{item?.title}</div>
                                <p className="text-orange-500 text-center ">Continue Reading</p>

                            </div>

                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default OurBlog