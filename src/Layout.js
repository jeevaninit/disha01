import React from 'react'
import Headercomp from './layoutcomponents/Headercomp'
import Navbarcomp from './layoutcomponents/Navbarcomp'
import Bannercomp from './layoutcomponents/Bannercomp'
import Footercomp from './layoutcomponents/Footercomp'
import Bodycontainer from './layoutcomponents/Bodycontainer'

const Layout = () => {
  return (
    <div>
        <Headercomp />
        <Navbarcomp />
        <Bannercomp />
        <Bodycontainer />
        <Footercomp />
    </div>
  )
}

export default Layout