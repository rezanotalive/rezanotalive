import * as React from 'react'
import { Link } from 'gatsby'

const MobileHeader = ({ props }) => {
  return (
    <div className={props}>
      <ul className="max-w-full m-auto">
        <li>
          <Link
            className="block text-sm px-2 py-4 hover:bg-green-500 font-semibold"
            activeClassName="text-black bg-green"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeClassName="text-black bg-green"
            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            activeClassName="text-black bg-green"
            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          >
            blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileHeader
