import React from 'react'

export const NavBar = () => {
  return (
    <header>

    <nav className='navbar'>
        <div className="logo">
            <img src='vite.svg' alt="logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Services</li>
        </ul>

        <button className='btn'>Login</button>
    </nav>
    </header>
  )
}
