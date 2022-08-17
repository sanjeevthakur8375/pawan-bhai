import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="aboutUs">
                <div className="container">
                    <h2 className='textCenter'>About Our <span className='strokeFont'>Company</span></h2>
                    <div className="mainContent flex justBetween">
                        <div className="img">
                            <img src="./assets/img/about.png" alt="about" className="img-fluid" />
                        </div>
                        <div className="content">
                            <div className="experience flex">
                                <div className="exp textCenter">
                                    <h2>5</h2>
                                    <h3>Years of Experience</h3>
                                </div>
                                <div className="para">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu dolorem laudantium, totam rem aper iam eaque ipsa quae ab illo inventore veritatis et quasi architecto beataese vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia volupta</p>
                                </div>
                            </div>
                            <p className='small'>Sed ut perspicias unde omnis iste natus error sit voluptatem accusantium dolor emqu laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch beatae vitae dicta sunt explicabo enim ipsam voluptatem</p>
                            <div className="owner flex">
                                <div className="img">
                                    <img src="./assets/icon/tech-support.png" alt="tech-support" />
                                </div>
                                <div className="text flex flexDirCol justCemter">
                                    <h3>Pawan Singh Bisht</h3>
                                    <p>CEO & FOUNDER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs
