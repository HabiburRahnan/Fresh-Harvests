import { BsTwitterX } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaPinterest, } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-white  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 ">
            <div className="w-full mb-16">

              <div

                className="flex gap-2 items-center text-xl"
              >
                <img
                  className="h-10 w-10"
                  src="https://i.ibb.co.com/Qbxd4Kg/image.png"
                  alt=""
                />
                <h1 className="text-xl text-[#212337] font-inter font-semibold ">
                  Fresh-Harvests
                </h1>
              </div>

            </div>
            <div className="w-full">
              <h4 className="text-lg font-semibold text-gray-800">Download App on Mobile:</h4>
              <p className="text-gray-600 mt-2">15% discount on your first purchase</p>
              <div className="flex space-x-2 mt-2">
                <Link to="/"><img src="https://i.ibb.co/kQ5LWjg/image.png" alt="Google Play" className="w-32 h-10" /></Link>
                <Link to="/"><img src="https://i.ibb.co/9pNtQn2/image.png" alt="App Store" className="w-32 h-10 border-2 border-black rounded" /></Link>
              </div>
            </div>

          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick links 1</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Shop</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">About us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Detail Blog</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick links 2</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Favorites</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-Quick links 2800">Cart</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Sign in</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Register</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact us</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="flex items-center text-[#749B3F] gap-2"><FaPhoneAlt />1234 5678 90</Link></li>
              <li><Link to="/" className="flex items-center text-[#749B3F] gap-2"><MdOutlineMail />Freshharvests@gmail.com</Link></li>
              <li><Link to="/" className="flex items-center text-sm text-[#749B3F] gap-2"><CiLocationOn />Tanjung Sari Street, Pontianak, Indonesia</Link></li>
              <li><Link to="/" className="text-black font-semibold">Accepted Payment Methods:</Link></li>
              <img className="h-12" src="https://i.ibb.co.com/qgzM9JW/image.png" alt="" />

            </ul>
          </div>


        </div>
        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <p className="text-gray-600">© Copyright 2024, All Rights Reserved by Banana Studio</p>
          <div className="flex space-x-2 mt-2">
            <Link to="/" className="text-[#2E487E] hover:text-gray-800 text-2xl"><FaFacebook /></Link>
            <Link to="/" className="text-[#000000] hover:text-gray-800 text-2xl"><BsTwitterX /></Link>
            <Link to="/" className="text-[#AE1B21] hover:text-gray-800 text-2xl"><FaPinterest /></Link>
            <Link to="/" className="text-[#0274B3] hover:text-gray-800 text-2xl"><FaLinkedin /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer