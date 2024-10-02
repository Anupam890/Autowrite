import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('../../assets/Error404.jpg')" }}>
        {/* You can add overlay or text here if needed */}
      </div>
      
      {/* Right Side Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                {...register("email", { required: "Email is required" })} 
                className={`border rounded-md w-full p-2 ${errors.email ? "border-red-500" : "border-gray-300"}`} 
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input 
                type="password" 
                {...register("password", { required: "Password is required" })} 
                className={`border rounded-md w-full p-2 ${errors.password ? "border-red-500" : "border-gray-300"}`} 
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <button type="submit" className="bg-[#6041FF] hover:bg-[#5036D5] text-white font-semibold py-2 px-4 rounded-full w-full transition duration-300">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
