import React, {Fragment, useState} from 'react';
import {ArrowLeft} from 'react-feather';
import {useDispatch, useSelector} from 'react-redux';
import {Accordion, Col, Input} from 'reactstrap';
import {Btn} from '../../AbstractElements';
import {Addtocart, APICallUrl, Close, CommonPath, OFF, quentityname, ShopNow, Weaccept} from '../../Constant';
import BrandFilterDropdown from '../../Shop/ShopCanvasFilter/BrandFilterDropdown';
import CustomerServices from './CustomerServices';
import Img from "../../Element/Images";
import ProductActions from "../Product4ImageContain/ProductActions";
import axios from "axios";
import {toast} from "react-toastify";
import SubFooter from "../../../Layout/Common/Footer/SubFooter";
import Link from "next/link";
import {selectAuth, selectLoginToken, setAuth, setLoginToken, setUser} from "../../../ReduxToolkit/Slices/LoginSlice";
import {selectNewCartProduct, setNewCartProduct} from "../../../ReduxToolkit/Slices/CartSlice";

const LeftSideContain = ({productData, singleProduct}) => {

    const {ProductFilter} = useSelector((state) => state.ModalReducer);
    const dispatch = useDispatch();

    let loginToken = useSelector(selectLoginToken);
    const [count, setCount] = useState(1);

    const AddToCart = () => {
        fetch(`${APICallUrl}/api/add-card`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                Authorization: `Bearer ${loginToken.token}`
            },
            body: JSON.stringify({
                "product_id": singleProduct?.id,
                "qty": count
            }),
        })
            .then((res) => res.json()).then((res) => {
            dispatch(setNewCartProduct(res))
            toast.success(`Item successfully added.`, {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose: 2000
            });
        })
            .catch((error) => {
                // Handle general fetch error
                console.error('Failed to Add to cart', error);
            });

    };
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        const minValue = 1;
        const maxValue = singleProduct?.quantity;

        // Check if the value is a number
        if (!isNaN(value)) {
            // Check if the value is within the min and max range
            const validValue = Math.min(Math.max(value, minValue), maxValue);
            setCount(validValue);
        }
    };

    return (
        <Col md="5" lg='5' xl="3"
             className='mt-lg-5 '
        >
            <div className={`category-option ${ProductFilter ? 'show' : ''}`}>

                <div className='category-name' style={{padding: "32px"}}>
                    <div className="product-checkout-section">
                        <h2 className='price-detail'>
                            ${(singleProduct?.front_sale_price !== null || undefined) && (singleProduct?.price > singleProduct?.front_sale_price) ? singleProduct?.front_sale_price.toFixed(2) : singleProduct?.price.toFixed(2)}
                            {(singleProduct?.front_sale_price !== null || undefined) && (singleProduct?.price > singleProduct?.front_sale_price) ?
                                <span><del>${singleProduct?.price.toFixed(2)}</del></span> : ""}
                            {/*<span>{OFF}</span>*/}

                        </h2>
                        <div style={{display: 'flex', alignItems: "center"}}>
                            <span className="dot" style={singleProduct?.quantity > 0 ? {} : {
                                backgroundColor: "var(--theme-color)",
                                outline: " 0.1rem solid var(--theme-color)"
                            }}></span><h3
                            style={{color: "black"}}>{singleProduct?.quantity > 0 ? "In stock" : "Out of stock"}</h3>
                        </div>
                    </div>
                    <div className="product-checkout-section">
                        <div>
              <span style={{color: "black"}}><img src={`${CommonPath}/productphoto.png`} style={{marginRight: "4px"}}
                                                  alt='small-banner'/>
                Order within 23hr 53min & your order will be shipped same day!</span>
                        </div>
                        <div>

              <span style={{color: "black"}}><img src={`${CommonPath}/producthome.png`} style={{marginRight: "4px"}}
                                                  alt='small-banner'/>
                Free Store Pick-up</span>
                        </div>
                    </div>

                    {
                        singleProduct?.quantity > 0 &&
                        <>
                            {
                                count === singleProduct?.quantity &&
                                <p style={{color: "var(--theme-color)"}}>There are {singleProduct?.quantity} items in
                                    stock.</p>
                            }
                            <div id='selectSize' className='addeffect-section product-description border-product'
                                 style={{display: 'flex'}}>
                                <h6 className='product-title product-title-2 d-block'
                                    style={{marginRight: "10px"}}>QTNY: </h6>
                                <div className='qty-box'>
                                    <div className='input-group'>
          <span className='input-group-prepend'>
            <Btn
                attrBtn={{
                    type: 'button',
                    className: 'quantity-left-minus btn-right-0',
                    onClick: () => {
                        setCount((prev) => (count !== 1 ? prev - 1 : 1));
                    },
                }}>
              <i className='fas fa-minus'></i>
            </Btn>
          </span>
                                        <Input type='text' name='quantity'
                                               className='form-control input-number'
                                               min={1} max={singleProduct?.quantity}
                                               value={count}
                                               onChange={handleQuantityChange}
                                        />
                                        <span className='input-group-prepend'>
            <Btn
                attrBtn={{
                    type: 'button',
                    className: 'quantity-right-plus btn-left-0',
                    onClick: () => {
                        setCount((prev) => (prev < singleProduct?.quantity ? count + 1 : singleProduct?.quantity));
                    },
                }}>
              <i className='fas fa-plus'></i>
            </Btn>
          </span>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <div className='product-buttons'>
                                    {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                                    <a
                                        className='btn btn-solid btn-transparent hover-solid btn-animation'
                                        // onClick={AddtoCart}
                                    >
                                        {/*<i className='fa fa-shopping-cart'></i>*/}
                                        <span>Add To Project</span>
                                    </a>
                                </div>
                                {/*<ProductActions singleProduct={singleProduct}/>*/}
                                <div className='product-buttons'>
                                    {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                                    <a id='cartEffect' className='btn btn-solid hover-solid btn-animation'
                                       onClick={AddToCart}
                                    >
                                        {/*<i className='fa fa-shopping-cart'></i>*/}
                                        <span>{Addtocart}</span>
                                    </a>
                                </div>
                            </div>
                        </>

                    }
                    <div className="sub-product-payments">
                        <ul>
                            <li>
                                <img src={`${CommonPath}/payment-icon/1.jpg`} className='img-fluid'
                                     alt='payment icon'/>
                            </li>
                            <li>
                                <img src={`${CommonPath}/payment-icon/2.jpg`} className='img-fluid'
                                     alt='payment icon'/>
                            </li>
                            <li>
                                <img src={`${CommonPath}/payment-icon/3.jpg`} className='img-fluid'
                                     alt='payment icon'/>
                            </li>
                            <li>
                                <img src={`${CommonPath}/payment-icon/4.jpg`} className='img-fluid'
                                     alt='payment icon'/>
                            </li>
                        </ul>
                    </div>

                    {/*<Accordion className='id-name' open={open} toggle={toggle}>*/}
                    {/*  <BrandFilterDropdown productData={productData} />*/}
                    {/*  <CustomerServices />*/}
                    {/*</Accordion>*/}

                </div>
                <div className='banner-deatils' style={{marginTop: "16px"}}>
                    <div className='banner-image' style={{
                        minHeight: "148px",
                        backgroundImage: "url(/assets/images/small.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        borderRadius: "8px",
                        padding: "32px"
                    }}>
                        <div style={{maxWidth: "160px", width: "100%"}}>
                            <h4>Shop Our Monthly Sales Flyer</h4>
                            <Fragment>
                                <div className='product-buttons' style={{margin: "20px 0 0 0"}}>
                                    {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                                    <a href='#javascript'
                                       className='btn btn-solid hover-solid btn-animation quick-order-button'
                                       style={{backgroundColor: "black"}}>
                                        {/*<i className='fa fa-shopping-cart'></i>*/}
                                        <span>SHOP NOW</span>
                                    </a>
                                </div>
                                {/*<div className='id-banner-button' style={{*/}
                                {/*    position: "absolute",*/}
                                {/*    // bottom: "6%",*/}
                                {/*    // left: "8%",*/}
                                {/*}}>*/}
                                {/*    <Btn*/}
                                {/*        attrBtn={{*/}
                                {/*            className: 'btn-solid-default ',*/}
                                {/*            onClick: () => router.push('/shop/shop_left_sidebar'),*/}
                                {/*        }}>*/}
                                {/*        {ShopNow}*/}
                                {/*    </Btn>*/}
                                {/*</div>*/}
                            </Fragment>
                        </div>

                    </div>
                </div>
            </div>

        </Col>
    );
};

export default LeftSideContain;
