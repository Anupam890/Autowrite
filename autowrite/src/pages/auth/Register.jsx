import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      return toast.error("Please fill all fields");
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        user
      );
      if (res.status === 201) {
        toast.success("🎉 Registration Successful!");
        setUser({ name: "", email: "", password: "" });
        setTimeout(() => navigate("/login"), 1000);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed. Try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-sm text-blue-600 self-end -mt-2"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md cursor-pointer font-semibold hover:bg-gray-900 transition"
        >
          Register
        </button>
      </form>
      <Toaster position="top-right" />
    </div>
  );
};

export default Register;
