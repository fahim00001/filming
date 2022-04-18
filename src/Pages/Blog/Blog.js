import React from 'react';

const Blog = () => {
    return (
        <div className='container vh-100'>
            <div>
                <h3>Difference between authorization and authentication?</h3>
                <p>simply authentication is verify user.Means if any user want's to login website or any app .User have to authentication first .He have to put some information to authenticate . It's mainly defines the user.
                But on the otherhand authorization other thing.Authorization is a proccess of verifying what they have access to. Means when we login facebook we have to first authentication when facebook insure the user then they access to the user their platfrom .

                </p>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p><ul>
                    <li>
                        <span className='fs-5 fw-bolder' >Cloud Messaging:</span> When anyone build any app or web application. They need notifications in their mobile application to enhanced engagement with user . also we don't have give a single doller.It's free of cost. 
                    </li>
                    <li>
                        <span className='fs-5 fw-bolder' >Dynamic Links:</span>this Dynamic links make user experience so great.This service is majorly used to generate deep links that redirect user traffic to your landing page, website, or mobile applications. They also provide custom domain names. And if you have your domain name, this service can be integrated with that, as well.
                    </li>
                    <li>
                        <span className='fs-5 fw-bolder' >Predictions:</span>It's the powerful and interesting service from firebase. It predicts different types of thing .for example if any want open a business it can easily predicts which gender and age people we have target.
                    </li>
                    <li><span className='fs-5 fw-bolder' >Google Analytics:</span> This is also a business purpose service.just a single click any seller can analyes his client behavior , purchasing patterns and his revenue report.It's also free.
                    </li>
                    <li> <span className='fs-5 fw-bolder' >Remote Config:</span>  It helps in remotely changing your application UI and content, without publishing it again.we need to update our application but sometimes it very hard to managed from the back-end .That's why Remote config is very userful cause we can easily customize our application on single click. </li>
                    </ul> 
                    </p>
            </div>
        </div>
    );
};

export default Blog;