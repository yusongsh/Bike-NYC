import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import '../style/landing.css'

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
                <div className='right-top1'></div>
                <div className='right-top2'></div>
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