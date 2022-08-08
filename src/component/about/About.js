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
              I am a self taught Front End Developer with 2-3 years of experience creating and maintaining a <span className="green">better code for reusablility.</span>  <br /> Capable of learning the <span className="green">latest tool</span> required to build your project with experince working in a team. I always focus on building and pushing a project forward as quick as possible. <br />
              I am eager and passionate when working on a project to ensure you are very satisfied with the service I render.
            </p>
            <p>Here are some of the tools i am currently working with :</p>
            <ul className="tech flex">
              <ul>
                <li>Html5</li>
                <li>Css </li>
                <li>Sass</li>
              </ul>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
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