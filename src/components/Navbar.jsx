import React, { useEffect } from "react";

function Navbar() {
  return (
    <div className="w-full px-3 shadow-lg shadow-emerald-600 py-3 flex justify-between items-center">
      {/* logo and heading */}
      <div className="flex gap-3 items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <h1 className="text-blue-500 lg:text-2xl text-xl font-bold">
          Your<span className="text-zinc-300 text-2xl lg:text-3xl">Task</span>
        </h1>
      </div>

      <div className=" lg:flex  font-bold text-3xl hidden items-center gap-14  ">
        <p className="text-zinc-200 transition-all duration-200 cursor-pointer hover:text-blue-400">
          Home
        </p>
        <p className="text-zinc-200 transition-all duration-200 cursor-pointer hover:text-blue-400">
          About
        </p>
        <p className="text-zinc-200 transition-all duration-200 hover:text-blue-400 cursor-pointer">
          Contact
        </p>
      </div>

      {/* section for login and signup */}
      <section className="flex items-center gap-3">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Log In
          </span>
        </button>

        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center hidden   sm:inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fill-rule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
      </section>
    </div>
  );
}

export default Navbar;
