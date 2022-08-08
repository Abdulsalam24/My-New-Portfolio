import React from 'react'

import Header from './component/header/Header'
import NavBar from './component/nav/NavBar'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Project from './component/project/Project'

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init()
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App