import React from 'react'
import ColorBtn from './MinCompo/ColorBtn'

const OurServices = () => {
    return (
        <>
            <div className="ourServices">
                <h2 className='textCenter'>Our <span className='strokeFont'>Services</span></h2>
                <div className="container">
                    <div className="mainContent flex justBetween">

                        <div className="cards">
                            <div className="card textCenter">
                                <img src="./assets/icon/web_deigning.png" alt="webdesigning" />
                                <h3>Web Designing</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error voluptate</p>
                                <ColorBtn btnPath="/" btnName="READ MORE" />
                            </div>
                            <div className="card textCenter">
                                <img src="./assets/icon/webdevelopment.png" alt="webdevelopment" />
                                <h3>Web Development</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error voluptate</p>
                                <ColorBtn btnPath="/" btnName="READ MORE" />
                            </div>
                        </div>

                        <div className="centerCard">
                            <img src="./assets/img/siteexamp.jpg" alt="" />
                            <div className="card flex">
                                <img src="./assets/img/cardicon1.png" alt="" />
                                <div className="cont">
                                    <h3>Digital Marketing</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumse totam rem aperiam</p>
                                    <ColorBtn btnPath="/" btnName="READ MORE" />
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card textCenter">
                                <img src="./assets/icon/design.png" alt="graphic" />
                                <h3>Graphic Designing</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error voluptate</p>
                                <ColorBtn btnPath="/" btnName="READ MORE" />
                            </div>
                            <div className="card textCenter">
                                <img src="./assets/icon/animate.png" alt="animate" />
                                <h3>Motion Videos</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error voluptate</p>
                                <ColorBtn btnPath="/" btnName="READ MORE" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices
