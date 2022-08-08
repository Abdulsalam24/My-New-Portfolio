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
                    <h2>Abdulsalam Mohammed</h2>
                    <p className='leading-p'>I, am a <Typical
                        className='typical'
                        loop={1}
                        wrapper="b"
                        steps={[
                            'Frontend Developer', 2000
                        ]}
                    />
                    </p>
                    <div className="text">
                        <div className="btn">
                            <a href="#project"><button>Check out my Work</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header