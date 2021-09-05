import * as React from 'react'
import { Link } from 'gatsby'

const FooterPage = () => {
  return (
    <div className="max-w-full bg-white p-3 m-2">
      <div className="flex justify-center">
        <p className="text-gray-500">
          Created with 💖 by{' '}
          <Link to="https://www.gatsbyjs.com/">GatsbyJs</Link>.{' '}
        </p>
      </div>
    </div>
  )
}

export default FooterPage
