import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hook/useServicehook';

const Showdetails = () => {
    const { serviceId } = useParams();
    //  console.log(serviceId);
    const { services } = useServices();
    // console.log(services);
    const selectctedService = services.filter(service => service?.id === parseFloat(serviceId))
    console.log(selectctedService);
    return (
        <div className='d-flex w-100 justify-content-center align-items-center container w-100 card-custom '>
            
                {/* <Row>
                <Col className=''>
                    <Card className='details-custom-card'>
                        <img width={300} src={selectctedService[0]?.picture} alt="" srcset="" />
                        <Card.Body>
                            <Card.Title>{selectctedService[0]?.name}</Card.Title>
                            <Card.Text>
                                {selectctedService[0]?.about}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to='/checkout'>
                            <Button variant="dark">Checkout</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
                </Row> */}
                <div className="container my-5">
            <div className="card mb-3" style={{ mazWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={selectctedService[0]?.picture} className="img-fluid rounded-start p-3" alt="..." />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h3 className="card-title"> Name: {selectctedService[0]?.name}</h3>
                            <h3 className="card-title">Price: {selectctedService[0]?.Price}</h3>
                            <p className="card-text">Details: {selectctedService[0]?.about}</p>
                          <Link to='/checkout'><button className='btn btn-warning' type="submit">Checkout</button> </Link>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Showdetails;