import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from '../../../images/banner/banner1.png'
import bannerImg2 from '../../../images/banner/banner2.jpg'
import bannerImg3 from '../../../images/banner/banner3.jpg'
const Banner = () => {
    return (
        <div className='container-fluid h-50'>
            <Carousel fade variant="Light">
  <Carousel.Item interval={1000}>
    <img
       height={300}
      className="h-75 w-100"
      src={bannerImg3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>My professional Desk</h3>
      <p>This is my setup.In a day i spend most of my time here.My compurter is highprefomance so i don't have to thing highload</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      
      className="h-75 w-100"
      src={bannerImg2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>This is my production room</h3>
      <p>When i need to work for animation i use this room .My one of the favourite place.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      height={300}
      className="h-75 w-100"
      src={bannerImg1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Sony alpha a7</h3>
      <p>This camera is mindblowing .when i need to shoot i use this camera.I also have more stuff for my flim making. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;