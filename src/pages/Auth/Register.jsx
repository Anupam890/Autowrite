import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import registerImg from "../../assets/registerImg.jpg";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const url = "http://localhost:3000/api/auth/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error.msg || "Registration failed");
        return;
      }
      toast.success("Registration Successful!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(`Registration Error: ${error}`);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google sign-in logic
    toast.info("Google sign-in is not yet implemented.");
  };

  return (
    <>
      <div className="register-container flex flex-col lg:flex-row justify-center items-center h-screen">
        {/* Image Section */}
        <div className="image-container w-full lg:w-1/2 h-64 lg:h-screen relative">
          <img
            src={registerImg}
            className="w-full h-full object-cover"
            alt="Register"
          />
          <div className="absolute bottom-0 left-0 p-4">
            <h1 className="text-3xl font-bold text-white">Get Started with Us</h1>
            <p className="text-white">Start your journey today!</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section w-full lg:w-1/2 h-auto lg:h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
          <div className="form-box bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-4 ">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <IoIosEyeOff size={24} /> : <IoIosEye size={24} />}
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Register
              </button>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Register with Google
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Register;
