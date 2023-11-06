"use client"
import { Card,Container} from 'react-bootstrap';
import './FeaturedVideos.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReactPlayer from 'react-player'

const FeaturedVideos = () => {
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
                <div className="d-flex text-start py-3">
                    <h3><span style={{ borderBottom: '2px solid #99F188' }}>Featured</span> <span style={{ color: '#97f185', borderBottom: '2px solid #97f185' }}>Videos</span></h3>
                </div>
                
                <Carousel responsive={responsive} autoPlaySpeed={2000} infinite={true}>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=Uhhi9VvyC2I'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #97f185 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Canada</Card.Title>
                            <Card.Text style={{ color: '##99F188 !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##99F188 !important', fontSize: '1em' }} /> Nova,Canada
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#6feb57' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=3vSxHROQ4Hs'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #97f185 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Thailand </Card.Title>
                            <Card.Text style={{ color: '##99F188 !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##99F188 !important', fontSize: '1em' }} /> surprise and incredible in thailand
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#6feb57' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=BapSQFJPMM0'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #97f185 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Egypt</Card.Title>
                            <Card.Text style={{ color: '##99F188 !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##99F188 !important', fontSize: '1em' }} /> Beautiful Destinations Egypt
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#6feb57' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=Cmsg9V-B6Zs'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #97f185 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Canada</Card.Title>
                            <Card.Text style={{ color: '##99F188 !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##99F188 !important', fontSize: '1em' }} /> Vienna, Canada
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#6feb57' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=nLeiVZ9BDKA'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #97f185 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Indonesia</Card.Title>
                            <Card.Text style={{ color: '##99F188 !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##99F188 !important', fontSize: '1em' }} />  Bali, Indonesia 
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#6feb57' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=9vN_htf-05w'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #97f185 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Jordan </Card.Title>
                            <Card.Text style={{ color: '##99F188 !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##99F188 !important', fontSize: '1em' }} /> Jordan 
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#6feb57' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=_dVjEQf68So'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #97f185 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Prague </Card.Title>
                            <Card.Text style={{ color: '##99F188 !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##99F188 !important', fontSize: '1em' }} /> Prague
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#6feb57' }} />
                            </span>
                        </Card.Body>
                    </Card>
                </Carousel>;
            </Container >
        </div>
    )
}

export default FeaturedVideos 