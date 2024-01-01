import React from 'react'
import Header from "./Header"
import Sidebar from '../Layout/Sidebar'
import Footer from "./Footer"
import {Outlet} from "react-router-dom"
function Layout() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet/>
    
    <Footer/>
    </>
  )
}

export default Layout