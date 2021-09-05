import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'

export default function HeaderPage() {
  const [openNavbar, setNavbar] = useState(0)

  return (
    <div className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <Link to="/" className="flex items-center py-4 px-0">
              <span className="font-semibold text-gray-500 text-lg">
                📸 Rezanotalive
              </span>
            </Link>
          </div>
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                activeClassName="text-green-500 border-b-4 border-green-500"
                className="py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                activeClassName="text-green-500 border-b-4 border-green-500"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/blog"
                activeClassName="text-green-500 border-b-4 border-green-500"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setNavbar(!openNavbar)}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            'mobile-menu max-w-full' + (openNavbar ? ' block pb-2' : ' hidden')
          }
        >
          <ul className="max-w-full m-auto">
            <li className="active block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
