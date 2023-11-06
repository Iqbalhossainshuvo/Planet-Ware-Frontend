"use client"
import { Card, Container } from 'react-bootstrap';
import './FeaturedPlaces.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FeaturedPlaces = () => {
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
                <h3><span style={{borderBottom:'2px solid #99F188'}}>Featured</span> <span style={{color:'#97f185',borderBottom:'2px solid #97f185'}}>Places</span></h3>
            </div>
                <Carousel responsive={responsive}  autoPlaySpeed={2000}  infinite={true}>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='https://i.ibb.co/hH3B580/brxxto-XRd3-Vwizj-Uk-unsplash-min.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay ">
                            <Card.Title>Australia</Card.Title>
                            <Card.Text style={{color:'##99F188 !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##99F188 !important', fontSize:'1em'}}/> Travel House
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='https://i.ibb.co/KGMGPXK/cayetano-gil-IIN1k30x-GBw-unsplash-min.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Turkey</Card.Title>
                            <Card.Text style={{color:'##99F188 !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##99F188 !important', fontSize:'1em'}}/> Istanbul, Turkey
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='https://i.ibb.co/z4YWyjr/dawson-lovell-W-MUqtu-Hwy-Y-unsplash-min.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Canada</Card.Title>
                            <Card.Text style={{color:'##99F188 !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##99F188 !important', fontSize:'1em'}}/> Niagara, Canada
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='https://i.ibb.co/5B1knyB/download-min.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Canada</Card.Title>
                            <Card.Text style={{color:'##99F188 !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##99F188 !important', fontSize:'1em'}}/> Jasper,Canada 
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='https://i.ibb.co/yWGWbSV/elyse-turton-uwr-Wz-RKRd3-M-unsplash-min.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>China</Card.Title>
                            <Card.Text style={{color:'##99F188 !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##99F188 !important', fontSize:'1em'}}/> Forbidden City,China
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='https://i.ibb.co/YN8JSzC/ember-navarro-m-YYmlaiu9f0-unsplash-min.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Australia</Card.Title>
                            <Card.Text style={{color:'##99F188 !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##99F188 !important', fontSize:'1em'}}/> Sydney,Australia
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='https://i.ibb.co/pWR4RXr/emre-aliriz-2rhz3-Nuq12c-unsplash-min.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Italy</Card.Title>
                            <Card.Text style={{color:'##99F188 !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##99F188 !important', fontSize:'1em'}}/> Venice, Italy
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#6feb57'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                </Carousel>;
            </Container >
        </div>
    )
}

export default FeaturedPlaces