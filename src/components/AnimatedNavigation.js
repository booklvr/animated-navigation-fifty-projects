import React, { useState } from 'react'

const AnimatedNavigation = () => {
  const [isActive, setIsActive] = useState(true)

  return (
    <nav className={isActive && 'active'} id='nav'>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Works</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <button className='icon' onClick={() => setIsActive(!isActive)}>
        <div className='line line1'></div>
        <div className='line line2'></div>
      </button>
    </nav>
  )
}

export default AnimatedNavigation
