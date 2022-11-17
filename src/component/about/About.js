import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className="heading" data-aos="fade-right">
        <span className="green">
          0.1</span> <h4>About Me</h4>
      </div>
      <div className="abt max-width" data-aos="fade-up">
        <div className="abt-text">
          <div className="text">

            <p>
              I am a Frontend Developer with <span className="green">two years of experience</span> creating user interfaces with clean, reusable code using React. I create a web application with the most recent tools and have prior experience <span className="green">working in a team</span>. I am constantly striving to build and advance a project as quickly as possible. When I'm working on a project, I'm eager and passionate about making sure you're completely satisfied with the service I provide.

            </p>
            <p>Here are some of the tools I'm currently using:</p>
            <ul className="tech flex">

              <ul>
                <li>HTML5</li>
                <li>CSS3 / Scss</li>
                <li>Tailwind CSS</li>
              </ul>
              <ul>
                <li>JavaScript / ES6  </li>
                <li>React.js | Next.js</li>
                <li>Git and Github</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* <div className="abt-img">
          <div className="img-border">
            <div className="img">
              <img src={profile} alt="" />
              <div className="thumbnail"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About