import React from 'react'
import {ProjectData} from './projectData'

const Project = () => {
    return (
        <section id='project'>
            <div className="heading" data-aos="fade-up">
                <span className="green">
                    0.2</span>
                <h4>Some Project</h4>
            </div>
            <div className="project max-width">
                <div className="project-text"></div>
                <div className="project-items flex">
                    {
                        ProjectData.map((item) => (
                            <div
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                key={item.title}
                                className='item'
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}>
                                <div className="item-img">
                                    <div className="item-text">
                                        <span className="green">
                                            {item.description}
                                        </span>
                                        <h5>
                                            {item.title}
                                        </h5>
                                        <div className="text">
                                            <p>
                                                {item.writeUp}
                                            </p>
                                        </div>
                                        <ul className="lang-type flex">
                                            <li>{item.html}</li>
                                            <li>{item.scss}</li>
                                            <li>{item.react}</li>
                                            <li>{item.redux}</li>
                                            <li>{item.bootstrap}</li>
                                        </ul>
                                        <div className="icon flex">
                                            <a href={item.gitHub}>
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                            <a href={item.link}>
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail"></div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Project