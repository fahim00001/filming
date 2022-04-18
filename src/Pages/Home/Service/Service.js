import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,picture,about} = service;
    const navigate = useNavigate();

    const navigateShowDetails = id  =>{
      navigate(`/service/${id}`);
    }
    return (
      <Col className='card-custom col-12'>
       <Card className=''>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button onClick={() => navigateShowDetails(id)} variant="dark">ShowDetails</Button>
        </Card.Footer>
      </Card>
      </Col>
       
    );
};

export default Service;<h1>Here is :</h1>