import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() =>{
        fetch('Client_reviewData.json')
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])
    return (
        <div className='my-5'>
            <h1 className='text-center' >Customer Reviews</h1>
            <Row xs={1} md={2} lg={3} className="mx-auto g-4">
                {
                    reviews.map(review => <Review

                    key={review._id}
                    review= {review}
                    ></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;