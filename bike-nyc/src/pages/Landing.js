import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import '../style/landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import img1 from '../assest/img-2.png'
import img2 from '../assest/img-3.png'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <Nav />
    <div className='landing'>
        <div className='landing-left'>
            <div className='landing-left-top'>
                <div className='left-top1'>
                    <h1 className='animated'>Bike NYC</h1>
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
                        <Link to=''>
                            <div className='path-info'>
                                <img src={img1} alt='central park'/>
                                <h4>Central Park Loop</h4>
                                <p>Length: 6.1mi</p>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='path-info'>
                                <img src={img2} alt='hudson river greenway'/> 
                                <h4>Hudson River Greenway</h4>
                                <p>Length: 9.3mi</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='right-top2'>
                    <a href='https://www.linkedin.com/in/yusongshi/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedinIn} size='2x' /></a>
                    <a href='https://github.com/yusongsh' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                    <a href='mailto:jackshi.sys@gmail.com' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} size='2x' /></a>
                </div>
            </div>

            <div className='landing-right-bottom'>
                <div className='right-bottom1'>
                    <h5>Learn</h5>
                    <h2>bike rules, resources in NYC</h2>
                </div>
                <div className='right-bottom2'>
                    <div className='bottom2-top'>
                        <h5>Shop</h5>
                        <h2>bike shops</h2>
                    </div>
                    <div className='bottom2-bottom'>
                        <h2>latest events</h2>
                    </div>
                </div>
            </div>
        </div>



    </div>
    <Footer />
    
    </>
  )
}

export default Landing