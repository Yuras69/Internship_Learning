import React from 'react'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
        <Footer/>

    </>
  )
}

export default Layout
