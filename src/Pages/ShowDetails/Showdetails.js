import { Button, Card, Col } from 'react-bootstrap';
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
        <div className='row'>
            <div className='col-lg-4' >
                <Col className='container card-custom col-12'>
                    <Card className=''>
                        <Card.Img width={400} variant="top" src={selectctedService[0]?.picture} />
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
            </div>
            <div className='col-lg-6'>

            </div>
        </div>
    );
};

export default Showdetails;