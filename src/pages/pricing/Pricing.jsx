// Desc: Pricing page for the dashboard
import { Link } from "react-router-dom";
import subscriptionPlans from "../../utils/Template";

const Pricing = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="dashboard-nav h-20 w-full flex items-center justify-between px-4 border-b-2">
        <div className="left-container flex gap-4 items-center">
          <h4 className="text-2xl font-bold text-[#6041FF]">AutoWrite</h4>
        </div>
        <div>
          <Link
            to={"/dashboard"}
            className="bg-[#6041FF] hover:bg-[#5036D5] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-container flex-grow bg-gray-50 p-6 md:p-12">
        <h1 className="text-4xl font-bold text-center my-6 text-[#333]">
          Pricing Plans
        </h1>

        <div className="pricing-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#6041FF] hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {plan.name}
              </h2>
              <h3 className="text-[#6041FF] text-2xl font-bold mb-4">
                {plan.price}
              </h3>

              <ul className="features text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#6041FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-center text-gray-500 mb-4">{plan.idealFor}</p>
              <button className="bg-[#6041FF] hover:bg-[#5036D5] text-white font-semibold py-2 px-4 w-full rounded-md transition duration-300">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
