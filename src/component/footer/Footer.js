import React from 'react'

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-flex flex">
          <div className="icon">
            <a href="https://mobile.twitter.com/Abdoyobos">
              <i><FaTwitter /></i>
            </a>
            <a href="https://www.linkedin.com/mwlite/in/abdulsalam-mohammed-46896922b">
              <i><FaLinkedin /></i>
            </a>
            <a href="https://github.com/Abdulsalam24">
              <i><FaGithub /></i>
            </a>
            <a href="https://web.facebook.com/profile.php?id=100068558813405">
              <i><FaFacebook /></i>
            </a>
          </div>
          <p className='email'>
            <a href="mailto:abdulsalammohammed586686@gmail.com">abdulsalammohammed586686@gmail.com</a>
          </p>
          <p className='last-p'>Built by Abdulsalam mohammed</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer