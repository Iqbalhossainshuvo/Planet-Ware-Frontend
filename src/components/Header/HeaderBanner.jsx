// import React from 'react';

// const HeaderBanner = () => {
//     return (
//         <div>
//             <h1>header banner</h1>
//         </div>
//     );
// };

// export default HeaderBanner;
"use client"
import { Col, Container, Row,Image } from 'react-bootstrap';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';

const HeaderBanner = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row className='gy-2'>
                    <Col md={12}>
                        <div className="">
                            <Carousel data-bs-theme="light" fade indicators={false} >
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-center shadow-sm">
                                        <Image src="https://i.ibb.co/TwPXHDz/alex-shutin-uhn-U0s-Sx-FQ-unsplash-min.jpg" 
                                        className='feature_left'
                                        style={{
                                            borderRadius: '20px',
                                            objectFit: 'cover',
                                            width: '100%', 
                                        }} loading='lazy'/>
                                        <div className="overlay">
                                            <small className='category'>Dubai</small>
                                            <h3>The gentle rustle of leaves and the distant calls of birds create a symphony</h3>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src="https://i.ibb.co/jWjw6V8/alice-triquet-He-EJU3nrg-0-unsplash-min.jpg" alt='kaptai'  className='feature_left shadow-sm' style={{
                                            borderRadius: '20px',
                                            objectFit: 'cover',
                                            width: '100%', 
                                        }}  loading='lazy' />
                                        <div className="overlay">
                                            <small className='category'>Turkey</small>
                                            <h3>Nature's beauty is reflected in the serene expanse of a tranquil lake. </h3>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src="https://i.ibb.co/fQ192XV/pexels-photo-9488909.jpg" alt='ranngamati' 
                                        className='feature_left shadow-sm'
                                        style={{
                                            borderRadius: '20px',
                                            objectFit: 'cover',
                                            width: '100%', 
                                        }}  loading='lazy' />
                                        <div className="overlay">
                                            <small className='category'>canada</small>
                                            <h3>Get wild in Jasper National Park, where it’s possible to spot moose</h3>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderBanner