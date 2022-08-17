import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Testominal = () => {
    return (
        <>
            <div className="testominal">
                <img className='test1' src="./assets/img/test1.png" alt="" />
                <img className='test2' src="./assets/img/test2.png" alt="" />
                <img className='test3' src="./assets/img/test3.png" alt="" />
                <img className='test4' src="./assets/img/test4.png" alt="" />
                <img className='test5' src="./assets/img/test5.png" alt="" />
                <img className='test6' src="./assets/img/test6.png" alt="" />
                <div className="container">
                    <h2>Clients <span className='strokeFont'>Reviews</span></h2>
                    <div className="maintestoninal">
                        <Carousel
                            responsive={responsive}
                            arrows={false}
                            infinite={true}
                            draggable={true}
                            swipeable={false}
                            autoPlay={true}
                            autoPlaySpeed={1500}
                            className="reviews">
                            <div className="review">
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis modi exercitationem itaque provident dolorem nobis, esse eligendi, unde iusto molestias. Qui at</p>
                                </div>
                                <div className="img flex">
                                    <img src="./assets/img/review.png" alt="" />
                                    <div className="name">
                                        <h4>Westover Charles</h4>
                                        <p>Web designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis modi exercitationem itaque provident dolorem nobis, esse eligendi, unde iusto molestias. Qui at</p>
                                </div>
                                <div className="img flex">
                                    <img src="./assets/img/review.png" alt="" />
                                    <div className="name">
                                        <h4>Westover Charles</h4>
                                        <p>Web designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis modi exercitationem itaque provident dolorem nobis, esse eligendi, unde iusto molestias. Qui at</p>
                                </div>
                                <div className="img flex">
                                    <img src="./assets/img/review.png" alt="" />
                                    <div className="name">
                                        <h4>Westover Charles</h4>
                                        <p>Web designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis modi exercitationem itaque provident dolorem nobis, esse eligendi, unde iusto molestias. Qui at</p>
                                </div>
                                <div className="img flex">
                                    <img src="./assets/img/review.png" alt="" />
                                    <div className="name">
                                        <h4>Westover Charles</h4>
                                        <p>Web designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis modi exercitationem itaque provident dolorem nobis, esse eligendi, unde iusto molestias. Qui at</p>
                                </div>
                                <div className="img flex">
                                    <img src="./assets/img/review.png" alt="" />
                                    <div className="name">
                                        <h4>Westover Charles</h4>
                                        <p>Web designer</p>
                                    </div>
                                </div>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testominal
