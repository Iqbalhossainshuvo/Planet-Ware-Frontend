"use client"

import Image from "next/image"
import { Button, Col, Container, Row } from "react-bootstrap"
import './BookHome.css'
import Link from "next/link"

const BookHome = () => {
    return (
        <div className="py-5" data-aos="fade-up">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="d-flex w-100 justify-content-center align-items-center">
                            <Image src="/assets/book.jpg" width={600} height={350} style={{ objectFit: 'contain', borderRadius:'20px' }} loading="lazy" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="bh_right">
                            <h1>Exciting travel enthusiasts! <br />simply leave. </h1>
                            <p style={{color:'#777'}} className="py-2">Prepare to embark on a journey of boundless adventure with a simple click - book your ticket and let your wanderlust carry you away. The world is your oyster...</p>
                            <Link href="/all-events" className="text-decoration-none">
                                <Button className="btn_bookHome">Book Now</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BookHome