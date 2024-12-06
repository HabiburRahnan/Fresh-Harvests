import { useState } from "react";
import { useRegisterMutation } from "../../redux/api/user";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function Register() {
    const [login, setLogin] = useState(false)
    const [register, { isLoading, isSuccess, error }] = useRegisterMutation();
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData).unwrap();
            toast.success("Registration successful!");
        } catch (error) {
            toast.error("Registration failed!");
        }
    };
    const [isOpen, setIsOpen] = useState(true); // Modal open state

    const closeModal = () => {
        setIsOpen(false);

    };
    console.log(formData)

    return (
        <>
            {isOpen && !login && (
                <div className="mt-20 md:fixed md:mt-0 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <ToastContainer />
                    {/* Modal container */}
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                        {/* Close Button */}
                        <a
                            onClick={closeModal}
                            href="/"
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            aria-label="Close Modal"
                        >
                            ✕
                        </a>


                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                            Register
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
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
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                               
                                type="submit" disabled={isLoading}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                            >
                                Register
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="text-center mt-4">
                            <p className="text-gray-700 text-sm">
                                Don’t have an account?{" "}
                                <Link
                                    onClick={() => {
                                        setLogin(true);
                                    }}

                                    className="text-orange-500 font-medium hover:underline"
                                >
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {login && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Login />
                </div>
            )}
        </>
    );
};

export default Register