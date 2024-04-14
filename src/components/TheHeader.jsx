import React from "react";
import { Link } from "react-router-dom";

const TheHeader = () => {
  return (
    <header className="px-10 flex items-center justify-between">
      <div className="flex items-center space-x-5">
        <img src="./logo.png" className="w-44" alt="logo" />
        <ul className="flex items-center space-x-7 text-lg text-white">
          <Link to={'/'} className="cursor-pointer hover:text-ligthRed">Home</Link>
          <li className="cursor-pointer hover:text-ligthRed text-gray-400">
            Series
          </li>
          <li className="cursor-pointer hover:text-ligthRed text-gray-400">
            Movies
          </li>
          <li className="cursor-pointer hover:text-ligthRed text-gray-400">
            Originals
          </li>
          <li className="cursor-pointer hover:text-ligthRed text-gray-400">
            Recently Added{" "}
          </li>
          <li className="cursor-pointer hover:text-ligthRed text-gray-400">
            My List
          </li>
        </ul>
      </div>
      <div className="relative text-gray-400 space-x-5 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-14 py-2.5 bg-gray-900 rounded-full outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 256 256"
          className="absolute top-2 bottom-0"
        >
          <path
            fill="currentColor"
            d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="fill-gray-100 cursor-pointer"
        >
          <path
            d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
          />
        </svg>
        <div className="w-10 h-10 cursor-pointer text-xl font-semibold text-black rounded-full bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-600 flex items-center justify-center">
            V
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
