import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {Col, Row} from 'reactstrap';
import {getAPIData} from '../../../Utils';
import AutoFadeSlider from '../Common/AutoFadeSlider';
import ProductDetails from '../ProductBundle/ProductDetails';
import ProductFilterButton from './ProductFilterButton';

const RightSideContain = ({singleProduct}) => {

    return (
        <Col md="7" lg='7' xl="9">
            {/*<ProductFilterButton />*/}
            <div className='details-items'>
                <Row className='g-4'>
                    <Col md='12' lg="12" xl="6">
                        <AutoFadeSlider singleProduct={singleProduct?.product}/>
                    </Col>
                    <Col md='12' lg="12" xl="6">
                        <ProductDetails singleProduct={singleProduct?.product} />
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default RightSideContain;
