import React from 'react'
import ColorBtn from './MinCompo/ColorBtn'
import MainBannerContent from './MinCompo/MainBannerContent'

const MainBanner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <MainBannerContent />
          <div className="buttons flex">
          <ColorBtn btnName = 'Digital Marketing' btnPath = '/' />
          <ColorBtn btnName = 'Websites & ECommerce' btnPath = '/' />
          <ColorBtn btnName = 'Real Estate' btnPath = '/' />

          </div>
        </div>
      </section>
    </>
  )
}

export default MainBanner
