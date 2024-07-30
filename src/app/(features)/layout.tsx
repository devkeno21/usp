import React from 'react'
import { NavBar } from './_components/nav-bar/nav-bar.component'
import { Footer } from './_components/footer/footer.component'
import Preloader from '../_components/preloader'

export default function LandingLayout({ children}: {children: React.ReactNode}) {


  return (
    <div style={{
      backgroundImage: `url(/home-bg.svg)`,
      // backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat:'repeat'
    }}>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}
