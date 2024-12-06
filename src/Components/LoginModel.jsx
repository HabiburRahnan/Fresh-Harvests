import { useState } from "react";
import Register from "../Page/Register/Register";
import { useLoginMutation } from "../redux/api/user";

function LoginModel() {
  const [userLogin, { isLoding, error, isSuccess }] = useLoginMutation()
  const [isOpen, setIsOpen] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isOpen && !isRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Modal Container */}
          <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <a
              href="/"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </a>

            {/* Modal Header */}
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Login
            </h2>

            {/* Login Form */}
            <form className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:ring-orange-400"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:ring-orange-400"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  👁️
                </button>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-orange-400 rounded"
                  />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-orange-400 hover:underline">
                  Forgot Password
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white rounded-md p-2 font-medium hover:bg-orange-600"

              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2 text-sm text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Sign Up Link */}
            <p className="text-sm text-center text-gray-600">
              Don’t have an account?
              <span
                onClick={() => {
                  setIsRegister(true);
                }}
                className="text-orange-400 font-medium hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Register Component */}
      {isRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Register />
        </div>
      )}
    </div>
  );
}

export default LoginModel;
