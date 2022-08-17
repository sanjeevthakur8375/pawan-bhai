import React from 'react';
import ColorBtn from '../MinCompo/ColorBtn';
import Navigation from '../MinCompo/Navigation';
import Socal from '../MinCompo/Socal';
import FillBtn from '../MinCompo/FillBtn';
import { IoIosMail } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container flex justBetween">
          <div className="description">
            <div className="logo">
              <img src="./assets/img/Logo.png" alt="footer-logo" />
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta</p>
            <Socal />
            <div className="copyRight flex justCemter textCenter">
              <p>Copyright © 2022 Web Cockroach Gurgaon | All Rides Reserved</p>
            </div>
          </div>
          <div className="threeMain">
            <div className="thSection flex justBetween">
              <div className="footer-logo">
                <img src="./assets/img/Logo.png" alt="footer-logo" />
              </div>
              <div className="useFulLinks">
                <h3>Use Ful Links</h3>
                <Navigation />
              </div>
              <div className="services">
                <h3>Our Services</h3>
                <ul>
                  <li><ColorBtn btnName='Website Design' btnPath='/' /></li>
                  <li><ColorBtn btnName='Mobile Site' btnPath='/' /></li>
                  <li><ColorBtn btnName='Ecommerce Development' btnPath='/' /></li>
                  <li><ColorBtn btnName='Web Application' btnPath='/' /></li>
                </ul>
              </div>
              <div className="socal">
                <h3>Contact US</h3>
                <p className='flex alinCenter'><IoIosMail /> <span><ColorBtn btnName='webcockroach@gmail.com' btnPath='/' /></span></p>
                <p className='flex alinCenter'><BsTelephoneFill /> <span><ColorBtn btnName='555 5555 555' btnPath='/' /></span></p>
              </div>
            </div>
            <div className="moreUpdate">
              <h3>Get More Update Join Our Newsletters</h3>
              <form className='flex'>
                <input type="text" placeholder='Enter Your Email' />
                <FillBtn btnName='Submit' btnPath='/' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
