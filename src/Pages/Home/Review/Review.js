import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css'
const Review = ({review}) => {
    console.log(review);
    const {picture,name,about} = review;
    return (
        <div className='review-container' >
            <Col className=' col-12'>
       <Card className='h-100'>
        <Card.Img className=''  variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            rating:4.5
        </Card.Footer>
      </Card>
      </Col>
        </div>
    );
};

export default Review;