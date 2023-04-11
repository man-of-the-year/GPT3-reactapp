import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p className='text__hover'>Overons</p>
          <p className='text__hover'>Social Media</p>
          <p className='text__hover'>Counters</p>
          <p className='text__hover'>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p className='text__hover'>Terms & Conditions</p>
          <p className='text__hover'>Privacy Policy</p>
          <p className='text__hover'>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p className='text__hover'>Crechterwoord K12 182 DK Alknjkcb</p>
          <p className='text__hover'>085-132567</p>
          <p className='text__hover'>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2023 Wander with 💖</p>
      </div>
    </div>
  )
}

export default Footer
