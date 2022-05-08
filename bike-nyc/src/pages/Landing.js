import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import '../style/landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

function Landing() {
  return (
    <>
    <Nav />
    <div className='landing'>
        <div className='landing-left'>
            <div className='landing-left-top'>
                <div className='left-top1'>
                    <h1>Bike NYC</h1>
                </div>
                <div className='left-top2'>
                    <h5>Weather</h5>
                    <div className='weatherhere'></div>
                </div>
            </div>
            <div className='landing-left-bottom'>
               <Slider/>
            </div>
        </div>

        <div className='landing-right'>
            <div className='landing-right-top'>
                <div className='right-top1'>
                    <h5>Featured Paths</h5>
                    <div className='right-top1-card'>
                        <div className='path-info'>
                            <img src='../assest/img-2.png' alt=''/>
                            <h4>Central Park Loop</h4>
                            <p>Length: 6.1mi</p>
                            <p>Elevation gain: 232ft</p>
                        </div>
                        <div className='path-info'>
                            <img src='../assest/img-3.png' alt=''/> 
                            <h4>Hudson River Greenway</h4>
                            <p>Length: 6.1mi</p>
                            <p>Elevation gain: 232ft</p>
                        </div>
                    </div>
                </div>
                <div className='right-top2'>
                    <FontAwesomeIcon className='rotate' icon={faLinkedinIn} size='2x' />
                    <FontAwesomeIcon className='rotate' icon={faGithub} size='2x'/>
                    <FontAwesomeIcon className='rotate' icon={faEnvelope} size='2x' />
                </div>
            </div>
            <div className='landing-right-bottom'>
                <div className='right-bottom1'></div>
                <div className='right-bottom2'>
                    <div className='bottom2-top'></div>
                    <div className='bottom2-bottom'></div>
                </div>
            </div>
        </div>



    </div>
    <Footer />
    
    </>
  )
}

export default Landing