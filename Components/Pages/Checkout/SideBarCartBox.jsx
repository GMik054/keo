import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Form, Input, InputGroup } from 'reactstrap';
import { getAPIData } from '../../../Utils';
import { Btn } from '../../AbstractElements';
import {CommonPath, EXAMPLECODE, Promocode, Redeem, TotalUSD, Yourcart} from '../../Constant';
import TotalPrice from './TotalPrice';

const SideBarCartBox = () => {
  const [cartData, setCartData] = useState([]);
  const { product, quantity } = useSelector((state) => state.AddToCartReducer);
  useEffect(() => {
    getAPIData(`${process.env.API_URL}getcart`)
      .then((res) => {
        setCartData(res.data);
      })
      .catch((error) => console.log('Error', error));
  }, [product]);

  return (
    <Col lg='4'>
      <div className='your-cart-box cart-table'>
        <h3 className='mb-3 d-flex text-capitalize'>
          Order Summary
          {/*<span className='badge bg-theme new-badge rounded-pill ms-auto bg-dark'>{cartData?.length}</span>*/}
        </h3>
        <ul className='list-group mb-3'>
          {cartData?.length > 0 ? (
            cartData.map((elem) => {
              return (
                <li className='list-group-item list-group-item-1 lh-condensed' key={elem.id}>
                  <div className='checkout-image'>
                    <img src={`${CommonPath}/${elem.images[0].src}`} className='img-fluid' />
                  </div>
                  <div>
                    <h4 className='my-0 fw-bold'>{elem.name}</h4>
                    <p>QTN: 1</p>
                  </div>
                  <span className="fw-bold">${quantity[elem.id]?.qty && quantity[elem.id]?.qty > 1 ? quantity[elem.id]?.qty * quantity[elem.id]?.price : elem.price}</span>

                </li>
              );
            })
          ) : (
            <li>
              <p>No Data Found</p>
            </li>
          )}
          <div className='list-group-item d-flex justify-content-between lh-condensed active'>
            <div className='text-dark'>
              <h5 className='my-0'>{Promocode}</h5>
              <small>{EXAMPLECODE}</small>
            </div>
            <span>-$5</span>
          </div>
        </ul>

        <div style={{padding:"15px calc(15px + 10 * (100vw - 991px) / 929)",display:"grid",gridGap:"10px"}}>

          <div className='list-group-item d-flex lh-condensed justify-content-between align-items-center'>
            <span className='fw-normal'>Subtotal (1items):</span>
            <span>$115</span>
          </div>

          <div className='list-group-item d-flex lh-condensed justify-content-between align-items-center'>
            <span className='fw-normal'>Delivery:</span>
            <span>$0</span>
          </div>

          <TotalPrice cartData={cartData} />
        </div>

        {/*<Form className='card custom-card border-0'>*/}
        {/*  <InputGroup className='custome-input-group'>*/}
        {/*    <Input type='text' placeholder='Promo code' />*/}
        {/*    <div className='input-group-append'>*/}
        {/*      <Btn attrBtn={{ className: 'btn-solid-default rounded-0' }}>{Redeem}</Btn>*/}
        {/*    </div>*/}
        {/*  </InputGroup>*/}
        {/*</Form>*/}
      </div>
    </Col>
  );
};

export default SideBarCartBox;
