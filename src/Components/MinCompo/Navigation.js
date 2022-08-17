import React from 'react';
import FillBtn from './FillBtn';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className='navigation flex alinCenter' id='navigation'>
        <ul className='flex'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
        <FillBtn btnName='Get A Quote' btnPath='/contact' />
      </div>
  )
}

export default Navigation
