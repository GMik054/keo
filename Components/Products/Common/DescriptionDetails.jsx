import React from 'react';
import {Col, Row} from 'reactstrap';
import {
    fabric,
    ProductDescription1,
    ProductDescription2,
    ProductDescription3,
    ProductDescription4,
    ProductQuestion1
} from '../../Constant';

const DescriptionDetails = () => {
    return (
        <div className='shipping-chart'>
            <div className='part'>
                <h3 className='inner-title mb-2'>Product Overview:</h3>
                <p className='font-light'> This smart TV unlocks hidden detail at four times the quality of Full HD.
                    Plus, Universal Guide helps you find exactly what you want to watch, quickly and easily.
                </p>
            </div>
            <div className='part'>
                <h3 className='inner-title mb-2'>Crystal Processor 4K</h3>
                <p className='font-light'> This ultra-fast processor transforms everything you watch into stunning 4K.</p>
            </div>
            <div className='part'>
                <h4 className='inner-title mb-2'>Key Features:</h4>
                <ul>
                    <li>- Crystal Processor 4K</li>
                    <li>- Smart TV Powered by Tizen</li>
                    <li>- Crystal Display</li>
                    <li>- HDR</li>
                    <li>- Universal Guide</li>
                </ul>
            </div>
        </div>
    );
};

export default DescriptionDetails;

// <h4 className='inner-title mb-2'>{ProductQuestion1}</h4>
// <p className='font-light'>{ProductDescription1}</p>
// </div>
//
// <Row className='g-3 align-items-center'>
//   <Col lg='8'>
//     <p className='font-light'>{ProductDescription2}</p>
//
//     <div className='part mt-3'>
//       <h5 className='inner-title mb-2'>{fabric}:</h5>
//       <p className='font-light'>{ProductDescription3}</p>
//       <p className='font-light'>{ProductDescription4}</p>
//     </div>
//   </Col>
//
//   <Col lg='4'>
//     <img src='/assets/images/fashion/slider/1.jpg' className='img-fluid rounded' alt='slider' />
//   </Col>
//
//   <Col lg='8' className='order-lg-2 mt-4'>
//     <p className='font-light'>{ProductDescription2}</p>
//     <div className='part mt-3'>
//       <p className='font-light'>{ProductDescription2}</p>
//     </div>
//   </Col>
//
//   <Col lg='4' className='order-lg-0 mt-4'>
//     <img src='/assets/images/fashion/slider/2.jpg' className='img-fluid rounded' alt='fashion' />
//   </Col>
// </Row>