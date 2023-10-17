"use client"
import { Card, Col, Container, Row } from 'react-bootstrap';
import './LatestBlogs.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LatestBlogs = () => {
    return (
        <div className='py-4' data-aos="fade-up">
            <Container>
                <div className="d-flex text-start py-5">
                    <h3><span style={{ borderBottom: '2px solid #99F188' }}>Latest</span> <span style={{ color: '#97f185', borderBottom: '2px solid #97f185' }}>Blogs</span></h3>
                </div>
                <Row>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='https://i.ibb.co/pWR4RXr/emre-aliriz-2rhz3-Nuq12c-unsplash-min.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Traveler good news</Card.Title>
                                <Card.Text style={{ color: '##99F188 !important', fontSize: '.80em' }}>
                                   Attention all travelers, I come bearing fantastic news! In a world often filled with uncertainties, it's refreshing to stumble upon a beacon of positivity, and that's exactly
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='https://i.ibb.co/5r5hZkB/ezra-jeffrey-comeau-x-Jcy-KVGa-Y0-Q-unsplash-min.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Traveler good news</Card.Title>
                                <Card.Text style={{ color: '##99F188 !important', fontSize: '.80em' }}>
                                   Attention all travelers, I come bearing fantastic news! In a world often filled with uncertainties, it's refreshing to stumble upon a beacon of positivity, and that's exactly
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='https://i.ibb.co/zXvp2zG/john-lee-o-Mne-OBYh-Jx-Y-unsplash-min.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Traveler good news</Card.Title>
                                <Card.Text style={{ color: '##99F188 !important', fontSize: '.80em' }}>
                                   Attention all travelers, I come bearing fantastic news! In a world often filled with uncertainties, it's refreshing to stumble upon a beacon of positivity, and that's exactly
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='https://i.ibb.co/ZTq4K18/liam-simpson-Cmyf-Wy-Txj-A8-unsplash-min.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Traveler good news</Card.Title>
                                <Card.Text style={{ color: '##99F188 !important', fontSize: '.80em' }}>
                                   Attention all travelers, I come bearing fantastic news! In a world often filled with uncertainties, it's refreshing to stumble upon a beacon of positivity, and that's exactly
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='https://i.ibb.co/RQxt5cT/mckenzie-toyne-9-Ke-Dc-JKEz-BY-unsplash-min.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Traveler good news</Card.Title>
                                <Card.Text style={{ color: '##99F188 !important', fontSize: '.80em' }}>
                                   Attention all travelers, I come bearing fantastic news! In a world often filled with uncertainties, it's refreshing to stumble upon a beacon of positivity, and that's exactly
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestBlogs