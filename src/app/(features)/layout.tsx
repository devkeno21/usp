import React from 'react'
import { NavBar } from './_components/nav-bar/nav-bar.component'
import { Footer } from './_components/footer/footer.component'

export default function LandingLayout({ children}: {children: React.ReactNode}) {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}
