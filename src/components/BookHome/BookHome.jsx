"use client";

import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./BookHome.css";
import Link from "next/link";

const BookHome = () => {
  return (
    <div className="py-5" data-aos="fade-up">
      <Container>
        <Row>
          {/* <Col md={12}>
            <div
              className="bh_right"
              style={{
                backgroundImage: 'url("/assets/book.jpg")', // Path to your background image
                backgroundSize: "cover", // Adjust the background size as needed
                backgroundRepeat: "no-repeat", // Set background repeat to none
                borderRadius: "20px", // Apply border-radius to the background container
                padding: "20px", // Add padding to the container if necessary
              }}
            >
            <div className="">
            <h1 style={{ color: "#fff" }}>
                Exciting travel enthusiasts! <br />
                simply leave.{" "}
              </h1>
              <p style={{ color: "#97f185" }} className="py-2">
                Prepare to embark on a journey of boundless adventure with a
                simple click - book your ticket and let your wanderlust carry
                you away. The world is your oyster...
              </p>
            </div>
              <Link href="/all-events" className="text-decoration-none">
                <Button className="btn_bookHome">Book Now</Button>
              </Link>
            </div>
          </Col> */}
          <Col md={12}>
    <div className="bh_right" style={{ 
        backgroundImage: 'url("/assets/book.jpg")', // Path to your background image
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundRepeat: 'no-repeat', // Set background repeat to none
        borderRadius: '20px', // Apply border-radius to the background container
        padding: '20px', // Add padding to the container if necessary
        position: 'relative', // Set position to relative for positioning the overlay
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay color with 50% opacity
            borderRadius: '20px', // Apply border-radius to the overlay
        }}></div>
        <h1 style={{ position: 'relative', color: '#fff', zIndex: 1 }}>Exciting travel enthusiasts! <br />simply leave. </h1>
        <p style={{ color: '#fff', position: 'relative', zIndex: 1 }} className="py-2">Prepare to embark on a journey of boundless adventure with a simple click - book your ticket and let your wanderlust carry you away. The world is your oyster...</p>
        <Link style={{ zIndex: 1 }} href="/all-events" className="text-decoration-none">
            <Button className="btn_bookHome">Book Now</Button>
        </Link>
    </div>
    
</Col>

        </Row>
      </Container>
    </div>
  );
};

export default BookHome;
