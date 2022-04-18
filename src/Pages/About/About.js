import React from 'react';
import Mypic from '../../images/professionalpic.jpg'
const About = () => {
    return (
        <div className='vh-100'>
            <div className='row mx-auto container' >
                <div className='col-lg-7'>
                    <h1 className='text-center' >About</h1>
                    <p className='fs-5 ' >my name's fahim . MY childhood dream is to became an top class coder. At the of 12 i realise
                        this thing give me a value.But for my laziness every time i failed.But last few month i'm learning web dev . Now i believe i can do.
                        My 2022 is to become expert wev developer  
                    </p>
                </div>
                <div className='col-lg-5'>
                    <img className='img-fluid' src={Mypic} alt="" srcset="" />
                </div>
            </div>
            
        </div>
    );
};

export default About;