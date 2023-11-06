"use client"
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './FeaturedVideos.css';
import 'react-multi-carousel/lib/styles.css';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarIcon from '@mui/icons-material/Star';


const Feature = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
    return (
        <div className="py-4 " data-aos="fade-up">
            <Container>
                <div className="py-4">
                    <Row>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <PeopleIcon style={{ fontSize: '2.33rem', color:'#97f185' }} />
                                <span className="ms-2 fs-3 text-center">3354</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>Flights</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <WorkspacePremiumIcon style={{ fontSize: '2.33rem', color:'#97f185' }} />
                                <span className="ms-2 fs-3 text-center">654</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>Certifications</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <CardGiftcardIcon style={{ fontSize: '2.33rem', color:'#97f185' }} />
                                <span className="ms-2 fs-3 text-center">134</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>Awards</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <StarIcon style={{ fontSize: '2.33rem', color:'#97f185' }} />
                                <span className="ms-2 fs-3 text-center">654</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>5 Stars</h6>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </Container >
        </div>
    )
}

export default Feature 