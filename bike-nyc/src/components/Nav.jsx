import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'

function nav() {
  return (
    <div className='nav'>
        <div className='left'></div>
        <div className='middle'>
            <Link to=''>Explore</Link>
            <Link to=''>Learn</Link>
            <Link to=''>Shop</Link>
        </div>
        <div className='right'>
            <Link to=''>Contact</Link>
        </div>
    </div>
  )
}

export default nav
