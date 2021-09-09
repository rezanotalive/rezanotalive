import * as React from 'react'
import { Link } from 'gatsby'

const FooterPage = () => {
  return (
    <div className="max-w-2xl px-4 md:px-0 md:max-w-full bg-white mb-4 mt-0">
      <div className="flex justify-start md:justify-center">
        <p className="text-gray-500">
          Created with 💖 by{' '}
          <Link to="https://www.gatsbyjs.com/">GatsbyJs</Link>.{' '}
        </p>
      </div>
    </div>
  )
}

export default FooterPage
