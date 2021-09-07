import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import MobileHeader from './MobileHeader'
import NavItems from './NavItems'
import CloseButton from './CLoseButton'

export default function HeaderPage() {
  const [openNavbar, setNavbar] = useState(0)

  return (
    <div className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container max-w-2xl mx-auto px-4">
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
              <NavItems props="/" nameItem="Home" />
              {/* <NavItems props="/about" nameItem="About" />
              <NavItems props="/blog" nameItem="Blog" /> */}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <CloseButton props={() => setNavbar(!openNavbar)} />
          </div>
        </div>
        {/* openMobileHeader */}
        <MobileHeader
          props={openNavbar ? ' block pb-2 mobile-menu' : ' hidden'}
        />
        {/* closeMobileHeader */}
      </div>
    </div>
  )
}
