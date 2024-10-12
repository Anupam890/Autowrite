import { Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineExplore,
  MdHomeFilled,
  MdBookmarks,
  MdAssignment,
} from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import img2 from "../../assets/img2.png";
import { FaRegSun, FaMoon } from "react-icons/fa"; 
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/features/themeSlice";

const Dashboard = () => {
  const [Navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  
  const credits = 34; 

  const handleNavbar = () => {
    setNavbar(!Navbar);
  };

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode()); 
  };

  return (
    <div className={`container min-w-full flex relative ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Left Sidebar */}
      <div
        className={`left ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r-2 fixed z-10 transform ${
          Navbar ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 transition-transform duration-300 ease-in-out w-64 min-h-screen`}
      >
        <div className="logo-container h-20 flex items-center p-10">
          <h4 className="text-2xl font-bold text-black">
            Auto<span className="text-[#6041FF]">Write</span>
          </h4>
        </div>
        <div className="nav-container h-[calc(100%-4rem)] p-4">
          <div className="nav-item">
            <div>
              <h4 className="text-gray-500 py-2 px-4 text-lg font-semibold">Dashboard</h4>
              <ul>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdHomeFilled className="text-2xl" />
                  <Link to="home">Home</Link>
                </li>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdOutlineExplore className="text-2xl" />
                  <Link to="explore">Explore</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-500 py-2 px-4 text-lg font-semibold">Account</h4>
              <ul>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdAssignment className="text-2xl" />
                  <Link to="history">History</Link>
                </li>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdBookmarks className="text-2xl" />
                  <Link to="fav">Favorites</Link>
                </li>
              </ul>
            </div>

            {/* Speedometer Style Credit Counter */}
            <div className="creditCounter mt-4 flex flex-col items-center">
              <h4 className="text-xl font-semibold">Credits</h4>
              <div className="relative flex items-center justify-center">
                <svg className="w-32 h-32" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={isDarkMode ? '#4B5563' : '#D1D5DB'}
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#6041FF"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${(credits / 100) * 282.74} 282.74`} // Adjust this for the max value
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)" // Rotate to start from the top
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <p className="text-2xl font-bold">{credits}</p>
                  <p className="text-lg">Credits</p>
                </div>
              </div>
            </div>

            {/* User Account Management */}
            <div className="userAccount py-2 px-4 mt-4 h-10 min-w-[160px] md:min-w-[240px]">
              <div className="flex items-center gap-4 p-2 bg-[#f5f5f5] text-black rounded-md">
                <img
                  src={img2}
                  alt="user-profile"
                  className="w-12 h-12 rounded-full border-2 border-indigo-500"
                />
                <div className="flex flex-col">
                  <h5 className="text-base font-semibold">richPanda</h5>
                  <div className="flex items-center">
                    <FaUserShield className="text-xl text-indigo-600" />
                    <span className="ml-1 text-sm text-gray-600">Free Plan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {Navbar && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-5"
          onClick={handleNavbar}
        />
      )}

      {/* Right Content */}
      <div className={`right w-full h-full flex-1 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <div className="dashboard-nav h-20 w-full flex items-center justify-between px-4 border-b-2">
          <div className="left-container flex gap-4 items-center">
            <RxDashboard
              onClick={handleNavbar}
              className="text-2xl mr-2 cursor-pointer md:hidden"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="theme">
              {isDarkMode ? (
                <FaMoon onClick={handleThemeToggle} className="text-2xl cursor-pointer" />
              ) : (
                <FaRegSun onClick={handleThemeToggle} className="text-2xl cursor-pointer" />
              )}
            </div>
            <Link to={"/pricing"} className="bg-[#6041FF] hover:bg-[#6041FF] text-white font-semibold py-2 px-4 rounded-md">
              Upgrade
            </Link>
          </div>
        </div>
        <div className="dynamic-container h-screen">
          
          <Outlet className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
