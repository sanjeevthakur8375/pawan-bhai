import React from 'react'
import Navigation from '../MinCompo/Navigation'

const Header = () => {
  {
    window.onscroll = function () { scrollFunction() };
    const scrollFunction = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 1)";
      } else {
        document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
    }
  }

  const Menuopen = () => {
    const bar = document.getElementById("navigation");
    if (bar.style.height === `auto`) {
      bar.style.height = `0px`;
    }
    else {
      bar.style.height = `auto`;
    }
  }

  return (
    <>
      <header className='header' id='header'>
        <div className="container flex justBetween">
          <div className="flex justBetween alinCenter">
            <div className="logo">
              <img src="assets/img/Logo.png" alt="" />
            </div>
            <div className="hamburger" onClick={() => Menuopen()}>
              <img src="assets/icon/hamburger.png" alt="hamburger" />
            </div>

          </div>
          <Navigation />
        </div>
      </header>
    </>
  )
}

export default Header
