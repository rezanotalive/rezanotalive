import * as React from 'react'
import { Link } from 'gatsby'

const NavItems = ({ props, nameItem }) => {
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

export default NavItems
