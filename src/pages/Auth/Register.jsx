import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Toaster, toast } from "react-hot-toast";
import regImage from "../../assets/reg.jpeg"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error.msg || "Registration failed");
        return;
      }
      toast.success("Registration Successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error(`Registration Error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${regImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-3xl font-bold">Create your Account</h1>
          <p className="mt-2 text-center">Share your artwork and Get projects!</p>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First Name is required" })}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            
            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
              })}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
                className="w-full p-3 mb-3 border rounded-lg"
              />
              <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoIosEyeOff size={24} /> : <IoIosEye size={24} />}
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <div className="flex items-center mt-3">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-gray-600">Accept Terms & Conditions</label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-900"
            >
              Join us →
            </button>
            
            <div className="mt-4 flex flex-col space-y-2">
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg flex items-center justify-center">
                <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" /> Sign up with Google
              </button>
              <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center">
                <img src="/apple-icon.svg" alt="Apple" className="w-5 h-5 mr-2" /> Sign up with Apple
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
