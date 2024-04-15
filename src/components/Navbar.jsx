import React, { useState } from "react";
import final_logo from "../assets/final_logo.png";
import { Link } from "react-router-dom";
import Dividers from "../components/Dividers";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[96px] shadow-sm">
      <div className="p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center">
        <img src={final_logo} alt="logo" className="w-24 cursor-pointer" />
        <div className="flex items-center">
          <ul className="hidden md:flex gap-4 ">
            <li>Home</li>
            <Dividers />
            <li>
            <Link to="/aboutus">
            Who We Are
            </Link>
            </li>
            <li>
              <span class="relative flex h-3 w-3">
              <div>
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500">
                <Link to="/blog">
                Blog
                </Link>
                </span>
                </div>
              </span>
            </li>
          </ul>
        </div>

        <div className="md:flex hidden gap-10">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link to="/register">Sign Up</Link>
          </button>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
