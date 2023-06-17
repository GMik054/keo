import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Col, Form, Input, InputGroup} from 'reactstrap';
import {getAPIData} from '../../../Utils';
import {Btn} from '../../AbstractElements';
import {APICallUrl, CommonPath, EXAMPLECODE, Promocode, Redeem, TotalUSD, Yourcart} from '../../Constant';
import TotalPrice from './TotalPrice';
import {selectCart, selectTotal} from "../../../ReduxToolkit/Slices/CartSlice";

const SideBarCartBox = () => {
    const [cartData, setCartData] = useState([]);
    const {product, quantity} = useSelector((state) => state.AddToCartReducer);

    let cart = useSelector(selectCart);
    let total = useSelector(selectTotal);

    // useEffect(() => {
    //     getAPIData(`${process.env.API_URL}getcart`)
    //         .then((res) => {
    //             setCartData(res.data);
    //         })
    //         .catch((error) => console.log('Error', error));
    // }, [product]);

    return (
        <Col lg='4'>
            <div className='your-cart-box cart-table'>
                <h3 className='mb-3 d-flex text-capitalize'>
                    Order Summary
                    {/*<span className='badge bg-theme new-badge rounded-pill ms-auto bg-dark'>{cartData?.length}</span>*/}
                </h3>
                <ul className='list-group mb-3'>
                    {cart?.length > 0 ? (
                        cart?.map((elem, i) => {
                            return (
                                <li className='list-group-item list-group-item-1 lh-condensed' key={i}>
                                    <div className='checkout-image'>
                                        <img src={`${APICallUrl}/storage/${elem?.product?.image}`}
                                             className='img-fluid'/>
                                    </div>
                                    <div style={{display: "grid", gap: "10px"}}>
                                        <h4 className='my-0 fw-bold'>{elem?.product?.name}</h4>
                                        <p style={{marginBottom: "0"}}>QTN: {elem?.qty}</p>
                                        <span style={{marginLeft: "0", color: "black"}}
                                              className="fw-bold">${(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ? (elem?.product?.front_sale_price * (elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty)).toFixed(2) : (elem?.product?.price * (elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty)).toFixed(2)}
                                            {(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ?
                                                <span style={{paddingLeft: "8px"}}><del style={{
                                                    color: "var(--theme-color)",
                                                    fontSize: "12px"
                                                }}>${(elem?.product?.price * (elem?.qty > elem?.product.quantity ? elem?.product?.quantity : elem?.qty)).toFixed(2)}</del></span> : ""}</span>
                                    </div>

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

                <div
                    style={{padding: "15px calc(15px + 10 * (100vw - 991px) / 929)", display: "grid", gridGap: "10px"}}>
                    {cart.length === 0 || cart.length === undefined ?
                        "" :
                        <div className='list-group-item d-flex lh-condensed justify-content-between align-items-center'>
                            <span className='fw-normal'>Subtotal ({cart?.length} items):</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    }
                    <div className='list-group-item d-flex lh-condensed justify-content-between align-items-center'>
                        <span className='fw-normal'>Delivery:</span>
                        <span>$0</span>
                    </div>

                    <div className='list-group-item d-flex lh-condensed justify-content-between align-items-center'>
                        <h3 className='fw-bold'>Total</h3>
                        <strong>${total.toFixed(2)}</strong>
                    </div>
                    {/*<TotalPrice cartData={cartData}/>*/}
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
