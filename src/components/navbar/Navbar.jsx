import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () => {
  return(
  <>
    <p><a className='text__hover' href="#home">Home</a></p>
    <p><a className='text__hover' href="#whpt3">What is GPT?</a></p>
    <p><a className='text__hover' href="#possibility">Open AI</a></p>
    <p><a className='text__hover' href="#features">Case Studies</a></p>
    <p><a className='text__hover' href="#blog">Library</a></p>
  </>    
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p className='text__hover'>Sign in</p>
          <button className='button__hover' type='button'>Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color='#fff' size='27' onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size='27' onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
