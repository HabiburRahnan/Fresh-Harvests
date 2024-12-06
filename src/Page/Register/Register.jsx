import { useState } from "react";

function Register() {
    const [isOpen, setIsOpen] = useState(true); // Modal open state

    const closeModal = () => {
        setIsOpen(false);

    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    {/* Modal container */}
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            aria-label="Close Modal"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                            Register
                        </h2>

                        {/* Form */}
                        <form>
                            {/* Full Name Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Remember Me and Forgot Password */}
                            <div className="flex items-center justify-between mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox text-green-500 h-4 w-4"
                                    />
                                    <span className="ml-2 text-gray-700 text-sm">Remember me</span>
                                </label>
                                <a
                                    href="#"
                                    className="text-sm text-green-500 hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                            >
                                Register
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="text-center mt-4">
                            <p className="text-gray-700 text-sm">
                                Don’t have an account?{" "}
                                <a
                                    href="#"
                                    className="text-orange-500 font-medium hover:underline"
                                >
                                    Log in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register