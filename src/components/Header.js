import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
        <ul className='flex justify-between border border-black'>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/table">Table</Link></li>
          <li><Link to="/random">Random Page</Link></li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Header