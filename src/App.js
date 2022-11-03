import React, { useState } from 'react'

import Header from './component/header/Header'
import NavBar from './component/nav/NavBar'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Project from './component/project/Project'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from './component/spinner'




const App = () => {
  const [load, setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 3000)

  AOS.init()

  return (
    load ? <Spinner /> : (
      <div>
        <NavBar />
        <Header />
        <About/>
        <Project />
        <Contact />
        <Footer />
      </div>
    )
  )
}

export default App