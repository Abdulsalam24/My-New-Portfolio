import React from 'react'
import Typical from 'react-typical'

const Header = () => {
    return (
        <header id='home'>
            <div className="home max-width">
                <div className="home-text">
                    <span className="name green">
                        Hi, my name is
                    </span>
                    <h2>Abdulsalam mohammed</h2>
                    <p className='leading-p'>I, am a <Typical
                          className='typical'
                          loop={1}
                          wrapper="b"
                          steps={[
                            'FrontEnd Developer', 2000
                            ]}
                          />
                    </p>
                    <div className="text">

                        <div className="btn">
                            <button><a href="#project">Check out my Work</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header