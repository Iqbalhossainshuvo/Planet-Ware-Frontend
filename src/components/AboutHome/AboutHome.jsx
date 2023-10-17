"use client"
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';

const AboutHome = () => {
    // ANIMATE ON SCROLL
    useEffect(() => {
        AOS.init({ offset: 120, duration: 1000, easing: "easeOut" });
    })
    
    return (
        <div className="py-4" data-aos="fade-up">
            <Container>
            <div className="d-flex text-start py-5">
                <h3><span style={{ borderBottom: '2px solid #99F188' }}>About</span> <span style={{ color: '#97f185', borderBottom: '2px solid #97f185' }}>Travel Tour</span></h3>
            </div>
                <Card className='border-0 shadow-sm rounded' style={{backgroundColor: '#DFFBF1'}}>
                    <Card.Header className='d-flex justify-content-center align-items-center'>
                        <Image src="/assets/logo.png" width={180} height={50} style={{objectFit:'contain'}}/>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p style={{ color: '#DFFBF1 !important', fontSize: '.78em' }}>
                                {' '}
                                a passionate explorer and a popular traveler in Canada, whose wanderlust knows no bounds. With an insatiable curiosity for the diverse landscapes and cultures of the Great White North, Alex has become a revered figure in the Canadian travel community.
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                            Beyond explorations in this man <cite title="Source Title">Meet Alex</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default AboutHome