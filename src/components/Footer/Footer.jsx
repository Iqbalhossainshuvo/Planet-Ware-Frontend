"use client"
import React from 'react'
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import './Footer.css';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SendIcon from '@mui/icons-material/Send';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (

    <footer className="mt-5 pt-4 h-100 shadow-sm">
      <div className=" p-3" style={{ backgroundColor: '#08151A' }}>
        <Container>
          <Row className='mt-3'>
            <Col md={4}>
              <div className="d-flex justify-content-start flex-column align-items-start h-100">
                <h3><span style={{ color: '#97f185' }}>Planet</span> <span style={{ color: '#fff', }}>Ware</span></h3>
                <p className='text-secondary'>Attention all travelers, I come bearing fantastic news! In a world often filled with uncertainties, it's refreshing to stumble upon a beacon of positivity.</p>
                <div className="d-flex">
                  <AddLocationAltIcon className='text-secondary' /> <p className='text-secondary'>Dhaka, Bangladesh</p>
                </div>

              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-evenly align-items-start">
                <div className="d-flex flex-column">
                  <h5 className='text-white border-bottom w-100'>Company</h5>
                  <div className="d-flex justify-content-start flex-column">
                    <Link href="/Contact" className='text-decoration-none text-secondary'>Contact</Link>
                    <Link href="/Careers" className='text-decoration-none text-secondary'>Careers</Link>
                    <Link href="/News" className='text-decoration-none text-secondary'>News</Link>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h5 className='text-white border-bottom w-100'>Quick links</h5>
                  <div className="d-flex justify-content-start flex-column">
                    <Link href="/" className='text-decoration-none text-secondary'>Support Center</Link>
                    <Link href="/" className='text-decoration-none text-secondary'>Security</Link>
                    <Link href="/" className='text-decoration-none text-secondary'>Privacy Policy</Link>
                    <Link href="/" className='text-decoration-none text-secondary'>Documentation</Link>
                  </div>
                </div>

              </div>
            </Col>
            <Col md={3}>
              <div className="">
                <h5 className='text-white border-bottom w-100'>Subscribe</h5>
                <Form className="d-flex mt-3 bg-light justify-content-center align-items-center rounded border-0 border-bottom ">
                  <Form.Control
                    type="search"
                    className="me-2 rounded border-0 text-secondary"
                    aria-label="Search"
                  />
                  <SendIcon style={{color:'#97f185'}} />
                </Form>
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="TH_socialIcon_container">
                    <Link href="https://www.instagram.com/" target="_blank">
                      <InstagramIcon className='TH_socialIcon' />
                    </Link>
                  </div>
                  <div className="TH_socialIcon_container">
                    <Link href="https://www.linkedin.com/" target="_blank">
                      <LinkedInIcon className='TH_socialIcon' />
                    </Link>
                  </div>
                  <div className="TH_socialIcon_container">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <FacebookIcon className='TH_socialIcon' />
                    </Link>
                  </div>
                  <div className="TH_socialIcon_container">
                    <Link href="https://twitter.com/" target="_blank">
                      <TwitterIcon className='TH_socialIcon' />
                    </Link>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className=" h-100 p-1 text-center shadow" style={{ backgroundColor: '#0d1e25' }}>
        <small className='text-light fw-bold'>© 2023 | All rights reserved to Planet Ware</small>
      </div>
    </footer >
  )
}

export default Footer