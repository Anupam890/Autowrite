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

  const handleNavbar = () => {
    setNavbar(!Navbar);
  };

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode()); // Dispatch the action to toggle dark mode
  };

  return (
    <div className={`container h-screen min-w-full flex relative ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Left Sidebar */}
      <div
        className={`left ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r-2 h-screen fixed z-10 transform ${
          Navbar ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 transition-transform duration-300 ease-in-out w-64`}
      >
        <div className="logo-container h-20 flex items-center p-10">
          <h4 className="text-2xl font-bold text-black">
            Auto<span className="text-[#6041FF]">Write</span>
          </h4>
        </div>
        <div className="nav-container h-[calc(100%-4rem)] p-4">
          <div className="nav-item">
            <div>
              <h4 className="text-gray-500 py-2 px-4 text-lg font-semibold">
                Dashboard
              </h4>
              <ul>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdHomeFilled className="text-2xl" />
                  <Link to="home">Home</Link>
                </li>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdOutlineExplore className="text-2xl" />
                  <Link to="/explore">Explore</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-500 py-2 px-4 text-lg font-semibold">
                Account
              </h4>
              <ul>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdAssignment className="text-2xl" />
                  <Link to="">History</Link>
                </li>
                <li className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <MdBookmarks className="text-2xl" />
                  <Link to="">Favorites</Link>
                </li>
              </ul>
            </div>

            <div className="creditCounter bg-[#6041FF] text-white rounded-md py-2 px-4 mt-4">
              <h4 className="text-white py-2 px-4 text-xl font-semibold">
                Credits
              </h4>
              <div className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-[#6041FF] hover:text-white">
                <p className="text-2xl">100</p>

                {/* progressBar */}
                <div className="w-full h-4 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-full bg-white rounded-full"></div>
                </div>

                <p className="text-lg">Credits</p>
              </div>
            </div>

            {/* userAccount management  */}
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
                    <span className="ml-1 text-sm text-gray-600">
                      Free Plan
                    </span>{" "}
                    {/* Example Role */}
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
      <div className="right w-full h-full flex-1">
        <div className="dashboard-nav h-20 w-full flex items-center justify-between px-4 border-b-2">
          <div className="left-container flex gap-4 items-center">
            <RxDashboard
              onClick={handleNavbar}
              className="text-2xl mr-2 cursor-pointer md:hidden"
            />
            {/* <h4 className="text-2xl font-bold">logo</h4> */}
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
        <div className="dynamic-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
