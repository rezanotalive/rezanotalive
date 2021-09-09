import * as React from 'react'
import { Link } from 'gatsby'

const FooterPage = () => {
  return (
    <div className="max-w-2xl mx-auto md:max-w-full bg-white mb-8 md:mb-4 mt-0">
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
