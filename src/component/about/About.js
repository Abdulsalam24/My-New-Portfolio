import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className="heading" data-aos='fade-up'>
        <span className="green">
          0.1</span> <h4>About Me</h4>
      </div>
      <div className="abt max-width" data-aos='fade-up' data-aos-duration="3000">
        <div className="abt-text">
          <div className="text">

            <p>
              I am a Frontend Developer with 2 years experience building User interface with <span className="green">clean and reusable</span> code using React. I work with <span className="green">latest tool</span> to build a web application and i am experinced working in a team. I always focus on building and pushing a project forward as quick as possible. <br />
              I am eager and passionate when working on a project to ensure you are very satisfied with the service I render.
            </p>
            <p>Here are some of the tools i am currently working with :</p>
            <ul className="tech flex">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Css </li>
              </ul>
              <ul>
                <li>Sass</li>
                <li>Tailwind</li>
                <li>Html5</li>
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