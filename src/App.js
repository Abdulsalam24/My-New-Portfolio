import React from 'react'

import Header from './component/header/Header'
import NavBar from './component/nav/NavBar'
import About  from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Footer from './Pages/footer/Footer'
import Project from './Pages/project/Project'

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init()
  return (
    <>
        <NavBar/>

        <Header/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App