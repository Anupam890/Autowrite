import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const [counter, setCounter] = useState(0);

  // Simple counter effect for dynamic stats
  useEffect(() => {
    if (counter < 10000) {
      const timer = setInterval(() => setCounter((prev) => prev + 50), 20);
      return () => clearInterval(timer);
    }
  }, [counter]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Navbar />
      <section className="hero text-black flex flex-col items-center justify-center h-screen text-center p-5 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-hero"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-animation-shapes"></div>

        {/* Hero Content */}
        <div className="z-10">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">
            AI-Powered Content Generator
          </h1>
          <p className="text-xl mb-8 animate-fade-up delay-200">
            Generate high-quality content in seconds.
          </p>
          <Link
            to="/dashboard"
            className="bg-[#6041FF] hover:bg-[#5036D5] py-3 px-8 rounded-full text-white font-semibold transition duration-300 animate-bounce"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {["Content Generation", "SEO Optimization", "Summarization"].map(
            (feature, idx) => (
              <div
                key={idx}
                className="feature-card p-8 bg-white shadow-lg hover:shadow-2xl rounded-lg transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4">{feature}</h3>
                <p className="text-gray-600">
                  Use our AI to instantly generate optimized and high-quality{" "}
                  {feature.toLowerCase()}.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Interactive Section */}
      <section className="try-now py-16 bg-[#6041FF] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Try AutoWrite Now</h2>
        <p className="text-lg mb-6">Enter a keyword and see how it works:</p>
        <form className="max-w-lg mx-auto flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter a keyword"
            className="w-full py-2 px-4 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-[#6041FF] py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Generate
          </button>
        </form>
      </section>

      {/* Dynamic Counters */}
      <section className="stats py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Stats</h2>
        <div className="flex justify-center gap-8">
          <div className="counter">
            <h3 className="text-4xl font-bold text-[#6041FF]">{counter}+</h3>
            <p className="text-gray-600">Articles Generated</p>
          </div>
          <div className="counter">
            <h3 className="text-4xl font-bold text-[#6041FF]">5,000+</h3>
            <p className="text-gray-600">Happy Users</p>
          </div>
          <div className="counter">
            <h3 className="text-4xl font-bold text-[#6041FF]">2,000+</h3>
            <p className="text-gray-600">Businesses Benefited</p>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="testimonial-slider max-w-lg mx-auto overflow-hidden">
          {/* Slider logic to rotate testimonials */}
          <div className="testimonial bg-gray-700 p-6 rounded-lg mb-4">
            <p>
              {`
                "AutoWrite has been a game-changer for our content marketing strategy. The AI-generated articles are not only high-quality but also optimized for SEO. We've seen a significant increase in traffic and conversions since we started using AutoWrite."
                `}
            </p>
            <h4 className="mt-4 font-bold"> - Anupam Mandal, CEO of TechBiz</h4>
          </div>
        </div>
      </section>
      <footer className=" text-black py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">AutoWrite</h3>
        <nav className="mb-4">
          <Link to="/" className="px-4 hover:text-gray-300">Home</Link>
          <Link to="/about" className="px-4 hover:text-gray-300">About</Link>
          <Link to="/services" className="px-4 hover:text-gray-300">Services</Link>
          <Link to="/contact" className="px-4 hover:text-gray-300">Contact</Link>
        </nav>
        <p className="text-sm">© 2024 AutoWrite. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Home;
