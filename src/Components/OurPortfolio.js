import React from 'react';
import FillBtn from './MinCompo/FillBtn';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { BsFillTagsFill } from 'react-icons/bs';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

const OurPortfolio = () => {
  return (
    <>
        <div className="ourPortfolio">
            <div className="container">
                <div className="heading alinCenter flex justBetween">
                    <h2>Our <span className='strokeFont'>Portfolio</span></h2>
                    <FillBtn btnName = 'See all design categories' btnPath = '/' />
                </div>
                <p>“Good Design Is Innovative,” Stated The Highly Influential Industrial Designer Dieter Rams In His List Of Ten Principles. Yet Breaking New Ground With Never-Before-Seen Website Design Is Becoming Increasingly Challenging.</p>
            </div>
            <Carousel
             responsive={responsive}
             arrows={false}
             infinite={true}
             draggable={true}
             swipeable={false}
             autoPlay={true}
             autoPlaySpeed={1500}
             className="cards">
                <div className="card">
                    <img src="./assets/img/card2.jpg" alt="" />
                    <p className='projName'>Project Name</p>
                    <div className="hover">
                        <BsFillTagsFill />
                        <p><strong>Lexis Nexis</strong></p>
                        <p className='para'>LexisNexis® is a leading global provider of content-enabled workflow solutions.</p>
                        <FillBtn btnName = 'View Project' btnPath = '/' />
                    </div>
                </div>
                <div className="card">
                    <img src="./assets/img/card2.jpg" alt="" />
                    <p className='projName'>Project Name</p>
                    <div className="hover">
                        <BsFillTagsFill />
                        <p><strong>Lexis Nexis</strong></p>
                        <p className='para'>LexisNexis® is a leading global provider of content-enabled workflow solutions.</p>
                        <FillBtn btnName = 'View Project' btnPath = '/' />
                    </div>
                </div>
                <div className="card">
                    <img src="./assets/img/card2.jpg" alt="" />
                    <p className='projName'>Project Name</p>
                    <div className="hover">
                        <BsFillTagsFill />
                        <p><strong>Lexis Nexis</strong></p>
                        <p className='para'>LexisNexis® is a leading global provider of content-enabled workflow solutions.</p>
                        <FillBtn btnName = 'View Project' btnPath = '/' />
                    </div>
                </div>
                <div className="card">
                    <img src="./assets/img/card2.jpg" alt="" />
                    <p className='projName'>Project Name</p>
                    <div className="hover">
                        <BsFillTagsFill />
                        <p><strong>Lexis Nexis</strong></p>
                        <p className='para'>LexisNexis® is a leading global provider of content-enabled workflow solutions.</p>
                        <FillBtn btnName = 'View Project' btnPath = '/' />
                    </div>
                </div>
                <div className="card">
                    <img src="./assets/img/card2.jpg" alt="" />
                    <p className='projName'>Project Name</p>
                    <div className="hover">
                        <BsFillTagsFill />
                        <p><strong>Lexis Nexis</strong></p>
                        <p className='para'>LexisNexis® is a leading global provider of content-enabled workflow solutions.</p>
                        <FillBtn btnName = 'View Project' btnPath = '/' />
                    </div>
                </div>
                <div className="card">
                    <img src="./assets/img/card2.jpg" alt="" />
                    <p className='projName'>Project Name</p>
                    <div className="hover">
                        <BsFillTagsFill />
                        <p><strong>Lexis Nexis</strong></p>
                        <p className='para'>LexisNexis® is a leading global provider of content-enabled workflow solutions.</p>
                        <FillBtn btnName = 'View Project' btnPath = '/' />
                    </div>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default OurPortfolio
