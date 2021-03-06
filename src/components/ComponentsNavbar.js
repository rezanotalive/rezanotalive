import * as React from 'react'
import { Link } from 'gatsby'

const tempMobile = (titleNav, toLink) => {
  return (
    <li>
      <Link
        className="block text-sm px-2 py-4 hover:bg-green-500 font-semibold"
        activeClassName="text-black bg-green"
        to={toLink}
      >
        {titleNav}
      </Link>
    </li>
  )
}

export const MobileHeader = ({ props }) => {
  return (
    <div className={props}>
      <ul>
        {tempMobile('home', '/')}
        {tempMobile('about', '/about')}
      </ul>
    </div>
  )
}

export const NavItems = ({ props, nameItem }) => {
  return (
    <div>
      <Link
        to={props}
        activeClassName="text-green-500 border-b-4 border-green-500"
        className="py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300"
      >
        {nameItem}
      </Link>
    </div>
  )
}

export const CloseButton = ({ props }) => {
  return (
    <button className="outline-none mobile-menu-button" onClick={props}>
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
  )
}
