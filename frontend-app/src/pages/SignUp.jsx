import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some((user) => user.email === formData.email)) {
      setError("Email already registered");
      return;
    }

    // Add new user
    const newUser = {
      id: Date.now(),
      ...formData,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Instead of setting currentUser and redirecting to home,
    // redirect to signin page
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-900/80 to-slate-900 bg-cover bg-center">
      <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-8 w-[400px] text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-white">Create Account</h2>
        {error && (
          <div className="mb-4 p-2 bg-red-500/20 text-red-200 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Password"
              required
            />
            <label className="flex items-center mt-2 cursor-pointer space-x-2 text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <span className="text-sm">Show Password</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-500"></div>
            <span className="px-4 text-gray-400">or continue with</span>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition duration-200">
              <i className="fab fa-twitter text-xl text-[#1DA1F2]"></i>
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition duration-200">
              <i className="fab fa-google text-xl text-[#DB4437]"></i>
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition duration-200">
              <i className="fab fa-facebook text-xl text-[#4267B2]"></i>
            </button>
          </div>
          <p className="mt-6 text-gray-400">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-blue-400 font-semibold hover:underline"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
