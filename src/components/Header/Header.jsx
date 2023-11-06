"use client"
import { Button, Col, Container, Row, } from 'react-bootstrap';
import './Header.css';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Header = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row className='gy-2'>
                    <Col md={12}>
                        <div className="p-3 text-start" >
                            <h1 className='fw-bold text-capitalize '>Life is brief, </h1>
                            <h1 className='fw-bold text-capitalize' style={{ color: '#97f185 ' }}>yet the world is vast.</h1>
                            <p className='my-3 text-muted'>Embarking on a journey is akin to opening a captivating storybook. Each step taken is a new chapter, unveiling the wonders of unexplored lands and cultures. The thrill of discovering unfamiliar traditions, </p>
                            <div className="my-4 shadow-sm p-3 rounded">
                                <Tabs
                                    defaultActiveKey="one"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"

                                >
                                    <Tab eventKey="one" title="Stays">
                                        <Form>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Label className='' style={{ color: '#777 ' }}>location</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <LocationOnIcon style={{ color: '#99f188' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            className='border-0'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col md={6} >
                                                    <Form.Label style={{ color: '#777 ' }}>Check In</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <DateRangeIcon style={{ color: '#99f188' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            className='border-0 text-muted'
                                                            type='date'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Label style={{ color: '#777 ' }}>Check Out</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <DateRangeIcon style={{ color: '#99f188' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            type='date'
                                                            className='border-0 text-muted'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Label style={{ color: '#777 ' }}>Travellers</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <PermIdentityIcon style={{ color: '#99f188' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            className='border-0'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <div style={{ width:'100%', display:'flex',alignItems:'center',justifyContent:'center' }}> <Button className="btn_filter">Search</Button></div>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="two" title="Flight">
                                        Tab content for Profile
                                    </Tab>
                                    <Tab eventKey="three" title="Cars">
                                        Tab content for Contact
                                    </Tab>
                                    <Tab eventKey="four" title="Cruise">
                                        Tab content for Contact
                                    </Tab>
                                </Tabs>
                               
                            </div>
                           
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Header