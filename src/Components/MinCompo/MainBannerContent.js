import React from 'react';
import ColorBtn from './ColorBtn';

const MainBannerContent = () => {
  return (
    <>
        <div className="bannerContent justBetween flex">
            <div className="img">
                <img src="./assets/img/mainBanner.png" alt="" />
            </div>
            <div className="cotent flex flexDirCol justCemter">
                <h1>Ecommerce Website Design</h1>
                <p>Make your online face appear the excelent. Find the most effective.</p>
                <ColorBtn btnName = 'See creativity at work' btnPath = '/' />
            </div>
        </div>
    </>
  )
}

export default MainBannerContent
