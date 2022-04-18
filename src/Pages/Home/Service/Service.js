import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const {id,name,picture,about,Price} = service;
    const navigate = useNavigate();

    const navigateShowDetails = id  =>{
      navigate(`/service/${id}`);
    }
    return (
      <Col className='card-custom col-12'>
       <Card className='h-100'>
        <Card.Img className='card-img'  variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h6>Price:<span className='text-warning fs-5' > {Price}</span></h6>
          <Card.Text>
            {about}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button className='d-block mx-auto w-75' onClick={() => navigateShowDetails(id)} variant="dark">ShowDetails</Button>
        </Card.Footer>
      </Card>
      </Col>
       
    );
};

export default Service;