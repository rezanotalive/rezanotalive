import * as React from 'react'

const CloseButton = ({ props }) => {
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

export default CloseButton
