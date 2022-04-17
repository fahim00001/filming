import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from '../../../images/banner/banner1.png'
import bannerImg2 from '../../../images/banner/banner2.jpg'
import bannerImg3 from '../../../images/banner/banner3.jpg'
const Banner = () => {
    return (
        <div className='container-fluid h-50'>
            <Carousel fade variant="dark">
  <Carousel.Item interval={1000}>
    <img
      className="h-75 w-100"
      src={bannerImg3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="h-75 w-100"
      src={bannerImg2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-75 w-100"
      src={bannerImg1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;