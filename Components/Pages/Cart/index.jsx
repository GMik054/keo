import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Container, Form, Input, Label, Row} from 'reactstrap';
import {deleteProduct, getAPIData} from '../../../Utils';
import {Btn} from '../../AbstractElements';
import {
    Addtocart,
    ApplyCoupon,
    CartTotals,
    clearallitems,
    ContinueShopping,
    ConvenienceFee,
    CouponDiscount,
    ProcessCheckout,
    TotalMRP
} from '../../Constant';
import BottomContain from './BottomContain';
import CartData from './CartData';
import CounterCart from './CounterCart';
import ProductActions from "../../Products/Product4ImageContain/ProductActions";
import ElectronicVR from "../../ElectronicDemo/ElectronicVR";
import {selectCart, selectSellTotal, selectTotal} from "../../../ReduxToolkit/Slices/CartSlice";

const ProductCart = () => {
    // const [cartData, setCartData] = useState([]);
    // const dispatch = useDispatch();
    const router = useRouter();

    // const {product} = useSelector((state) => state.AddToCartReducer);


    // useEffect(() => {
    //     getAPIData(`${process.env.API_URL}getcart`)
    //         .then((res) => {
    //             setCartData(res.data);
    //         })
    //         .catch((error) => console.log('Error', error));
    // }, [product]);
    // const removeAll = () => {
    //     deleteProduct(`${process.env.API_URL}remove/cart/all`).then((res) => {
    //         setCartData(res.data);
    //         dispatch({type: 'ADDTOCART', payload: res?.data});
    //     });
    // };
    // const getTotalPrice = () => {
    //     var addPrice = 0;
    //     const filterPrice =
    //         cartData &&
    //         cartData.map((el) => {
    //             return el.price;
    //         });
    //     filterPrice?.map((elem) => (addPrice += elem));
    //     return addPrice;
    // };
    // const [totalMrp, setTotalMrp] = useState(0);
    let cart = useSelector(selectCart);
    let total = useSelector(selectTotal);
    let sellTotal = useSelector(selectSellTotal);
    console.log(total, "total")
    console.log(Number(sellTotal) - (Number(total)), "sellTotal")
    // console.log(total.toFixed(2), "total")
    // console.log(cart,"CArt")

    return (
        <section className='cart-section section-b-space' style={{backgroundColor: "white", paddingBottom: "0"}}>
            <Container>
                <Row className=''>
                    {cart.length > 0 ? (
                        <>
                            {/*<CounterCart />*/}
                            <CartData/>
                            <Col xl='5' xxl='4' className='ms-auto cart-checkout-section top-cart-elements'>
                                <div className='cart-box'>
                                    <div className='cart-box-details'>
                                        <div className='total-details'>
                                            <div className='top-details' style={{borderBottom: "none"}}>
                                                <h3>Order Summary</h3>
                                                {/*<h6>{CouponDiscount} <span>-$25.00</span></h6>*/}
                                                {/*<h6>{ConvenienceFee}<span><del>$25.00</del></span></h6>*/}
                                                <h6 className='fw-bold'>
                                                    Subtotal: <span>${total.toFixed(2)}</span>
                                                </h6>
                                                <h6 className='fw-bold shipping-info-for-cart'>
                                                    Shipping: <ul>
                                                    <li>
                                                        <div className='form-check p-0 custome-form-check'>
                                                            <input className='checkbox_animated check-it'
                                                                   type='checkbox' style={{top: "-2px"}}/>
                                                            <Label className='form-check-label'
                                                                   style={{marginBottom: "0"}}>
                                                                Free Ground Shipping</Label>
                                                            {/*<p className='font-light'>(25)</p>*/}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='form-check p-0 custome-form-check'>
                                                            <input className='checkbox_animated check-it'
                                                                   type='checkbox' style={{top: "-2px"}}/>
                                                            <Label className='form-check-label'
                                                                   style={{marginBottom: "0"}}>
                                                                UPS Ground: $20.22</Label>
                                                            {/*<p className='font-light'>(25)</p>*/}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='form-check p-0 custome-form-check'>
                                                            <input className='checkbox_animated check-it'
                                                                   type='checkbox' style={{top: "-2px"}}/>
                                                            <Label className='form-check-label'
                                                                   style={{marginBottom: "0"}}>
                                                                UPS 3 Day Select: $43.13</Label>
                                                            {/*<p className='font-light'>(25)</p>*/}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='form-check p-0 custome-form-check'>
                                                            <input className='checkbox_animated check-it'
                                                                   type='checkbox' style={{top: "-2px"}}/>
                                                            <Label className='form-check-label'
                                                                   style={{marginBottom: "0"}}>
                                                                UPS 2nd Day Air: $59.26</Label>
                                                            {/*<p className='font-light'>(25)</p>*/}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='form-check p-0 custome-form-check'>
                                                            <input className='checkbox_animated check-it'
                                                                   type='checkbox' style={{top: "-2px"}}/>
                                                            <Label className='form-check-label'
                                                                   style={{marginBottom: "0"}}>
                                                                UPS Next Day Air: $97.53</Label>
                                                            {/*<p className='font-light'>(25)</p>*/}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='form-check p-0 custome-form-check'>
                                                            <input className='checkbox_animated check-it'
                                                                   type='checkbox' style={{top: "-2px"}}/>
                                                            <Label className='form-check-label'
                                                                   style={{marginBottom: "0"}}>
                                                                Local Pickup : FREE</Label>
                                                            {/*<p className='font-light'>(25)</p>*/}
                                                        </div>
                                                    </li>

                                                </ul>
                                                </h6>


                                                <h6 className='fw-normal' style={{color: "#969696"}}>
                                                    Shipping to: <span className="fw-bold" style={{color: "black"}}>7306 Coldwater Canyon Ave, North Hollywood, CA 91605</span>
                                                    <div className="fw-normal " style={{
                                                        textAlign: "end",
                                                        padding: "8px 0",
                                                        color: "var(--theme-color)",
                                                        textDecoration: "underline"
                                                    }}><a>Change Address</a></div>
                                                </h6>


                                                <div className='promo-section'
                                                     style={{borderBottom: "1px solid #E6E8E9", paddingBottom: "16px"}}>
                                                    {/*<Form className='row' style={{display:"flex"}}>*/}
                                                    {/*    <Col xs='12'>*/}

                                                    {/*    </Col>*/}
                                                    {/*<Col xs='5'>*/}
                                                    {/*    <Btn attrBtn={{ className: 'btn btn-solid-default rounded btn' }}>{ApplyCoupon}</Btn>*/}
                                                    {/*</Col>*/}
                                                    {/*</Form>*/}

                                                    <div className="coupon-block">
                                                        <div className="coupon-input d-flex">
                                                            <Input type='text' className='form-control' id='number'
                                                                   placeholder='Coupon Code'/>
                                                            <button className='btn coupon btn-solid-default btn'>Apply
                                                            </button>
                                                        </div>
                                                        {/*{*/}
                                                        {/*    tr ? req.status === 500 || req.status === "error" ?*/}
                                                        {/*        <p className="coupon-error">{req.message}</p> :*/}
                                                        {/*        <p className="coupon-success">{req.message}</p> : <></>*/}
                                                        {/*}*/}
                                                    </div>
                                                </div>
                                                <h2 className='fw-bold' style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    padding: "20px 0"
                                                }}>
                                                    Total:
                                                    <div className="total-cart-details">
                                                        {
                                                            Number(sellTotal) !== 0 &&
                                                            <span className="fw-normal red-font-size"
                                                                  style={{color: "var(--theme-color)"}}>You Save ${Math.round(Number(sellTotal) - (Number(total)))}</span>
                                                        }
                                                        <span className="fw-bold" style={{
                                                            display: "flex",
                                                            justifyContent: "end",
                                                            color: "black",
                                                            marginLeft: "8px"
                                                        }}>${total.toFixed(2)}</span>
                                                    </div>
                                                </h2>
                                                <div>
                                                    <div className='product-buttons'>
                                                        {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                                                        <a id='cartEffect'
                                                           className='btn btn-solid btn-transparent hover-solid btn-animation'>
                                                            {/*<i className='fa fa-shopping-cart'></i>*/}
                                                            <span>Continue Shopping</span>
                                                        </a>
                                                    </div>
                                                    <div className='product-buttons'>
                                                        {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                                                        <Link href={'/checkout'}
                                                              className='btn btn-solid hover-solid btn-animation'>
                                                            {/*<i className='fa fa-shopping-cart'></i>*/}
                                                            <span>Checkout</span>
                                                        </Link>

                                                    </div>
                                                </div>
                                                {/*<div className='bottom-details'>*/}
                                                {/*    <Link href={'/page/checkout'}>{ProcessCheckout}</Link>*/}
                                                {/*</div>*/}
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/*<Col xs='12' className='mt-md-5 mt-4'>*/}
                            {/*    <Row>*/}
                            {/*        <Col sm='7' xs='5' className='order-1'>*/}
                            {/*            <div className='left-side-button text-end d-flex d-block justify-content-end'>*/}
                            {/*                <a href='#javascript'*/}
                            {/*                   className='text-decoration-underline theme-color d-block text-capitalize'*/}
                            {/*                   onClick={() => removeAll()}>*/}
                            {/*                    {clearallitems}*/}
                            {/*                </a>*/}
                            {/*            </div>*/}
                            {/*        </Col>*/}
                            {/*        <Col sm='5' xs='7'>*/}
                            {/*            <div className='left-side-button float-start'>*/}
                            {/*                <Link href={`/layout/fashion`}*/}
                            {/*                      className='btn btn-solid-default btn fw-bold mb-0 ms-0'>*/}
                            {/*                    <i className='fas fa-arrow-left'></i> {ContinueShopping}*/}
                            {/*                </Link>*/}
                            {/*            </div>*/}
                            {/*        </Col>*/}
                            {/*    </Row>*/}
                            {/*</Col>*/}
                            {/*<BottomContain cartData={cartData} totalMrp={totalMrp}/>*/}
                        </>
                    ) : (
                        <Col xs='12'>
                            <div className='empty-box text-center'>
                                <img src='/assets/images/cartEmpty.png' className='img-fluid mb-sm-4 mb-3'
                                     alt='empty cart'/>
                                <div className='w-100'>
                                    <h5 className='mb-3 font-dark'>Your shopping cart is empty. Let's add something to
                                        it</h5>
                                    <Btn attrBtn={{
                                        className: 'btn-solid-default',
                                        onClick: () => router.push('/shop/shop_left_sidebar')
                                    }}>{ContinueShopping}</Btn>
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default ProductCart;
