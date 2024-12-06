import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import LoginModel from "../Components/LoginModel";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Function to get cart count from localStorage
  const getCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems.length;
  };

  // Update cart count every second
  useEffect(() => {
    // Initial cart count
    setCartCount(getCartCount());

    // Update cart count every second (1000 milliseconds)
    const intervalId = setInterval(() => {
      setCartCount(getCartCount());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const navList = (
    <>
      <li className="rounded">
        <Link to="/">Home</Link>
      </li>
      <li className="rounded">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="rounded">
        <Link to="/addProduct">App Product</Link>
      </li>
      <li className="rounded">
        <Link to="/updateProduct">Update Product</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="container mx-auto navbar h-15 py-0">
        <div className="navbar-start">
          {/* responsive logo */}
          <div className="flex justify-center items-center gap-5 lg:hidden">
            <Link to="" className="flex justify-center items-center text-2xl">
              <img
                className="h-8 md:h-10 w-8 md:w-10"
                src="https://i.ibb.co/Qbxd4Kg/image.png"
                alt="Logo"
              />
              <h1 className="text-[10px] md:text-xl text-[#212337] font-inter font-semibold">
                Fresh Harvests
              </h1>
            </Link>
          </div>
          {/* lg logo */}
          <div className="justify-center items-center hidden lg:block">
            <Link to="" className="flex justify-center items-center gap-2 text-xl">
              <img
                className="h-10 w-10"
                src="https://i.ibb.co/Qbxd4Kg/image.png"
                alt="Logo"
              />
              <h1 className="text-xl text-[#212337] font-inter font-semibold">
                Fresh-Harvests
              </h1>
            </Link>
          </div>
        </div>

        {/* lg menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>

        <div className="navbar-end lg:ml-0 md:ml-0 ml-20">
          {/* lg end */}
          <div className="md:flex lg:flex justify-center items-center gap-3 md:justify-end hidden space-x-2 px-4 py-2">
            <div>
              <Link to="" className="flex justify-center items-center gap-1">
                <MdFavorite />
                Favorites
              </Link>
            </div>
            <div>
              <Link to="/cart" className="flex justify-center items-center gap-1">
                <FaCartPlus />
                Cart ({cartCount})
              </Link>
            </div>
          </div>

          {/* responsive cart */}
          <div className="px-3 block md:hidden">
            <Link to="" className="flex justify-center items-center gap-2">
              <FaCartPlus />
              Cart ({cartCount})
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <div
              onClick={() => setIsLogin(true)}
              className="btn-outline outline-white border-2 p-2 rounded-md space-x-2 cursor-pointer"
            >
              Sign<span>in</span>
            </div>
          </div>
          {isLogin && <LoginModel />}

          {/* responsive menu */}
          <div className="drawer drawer-end lg:hidden z-10 justify-around">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-gradient-to-r from-[#749B3F] to-[#749B3F] min-h-full w-56 px-4 text-white">
                {navList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
