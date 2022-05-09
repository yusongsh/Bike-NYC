import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav1.css'

function Nav1() {
  return (
    <div className='nav1'>
        <div className='nav-left'>
            <Link to=''>Explore</Link>
            <Link to=''>Learn</Link>
            <Link to=''>Shop</Link>
        </div>
        <div className='nav-middle'>
            <Link to=''>BIKE NYC</Link>
        </div>
        <div className='nav-right'>
            <Link to=''>Contact</Link>
        </div>
    </div>
  )
}

export default Nav1