import React, {Fragment, useState} from 'react';
import {ArrowLeft} from 'react-feather';
import {useDispatch, useSelector} from 'react-redux';
import {Accordion, Col, Input} from 'reactstrap';
import {Btn} from '../../AbstractElements';
import {Addtocart, Close, CommonPath, OFF, quentityname, ShopNow, Weaccept} from '../../Constant';
import BrandFilterDropdown from '../../Shop/ShopCanvasFilter/BrandFilterDropdown';
import CustomerServices from './CustomerServices';
import Img from "../../Element/Images";
import ProductActions from "../Product4ImageContain/ProductActions";
import axios from "axios";
import {toast} from "react-toastify";
import SubFooter from "../../../Layout/Common/Footer/SubFooter";
import Link from "next/link";

const LeftsideContain = ({productData, singleProduct}) => {
    const [open, setOpen] = useState('1');
    const {ProductFilter} = useSelector((state) => state.ModalReducer);
    const [count, setCount] = useState(1);

    const dispatch = useDispatch();
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const AddtoCart = () => {
        axios
            .post(`${process.env.API_URL}addtocart`, {id: singleProduct ? singleProduct[0]?.id : 1})
            .then((res) => {
                dispatch({type: 'ADDTOCART', payload: res.data});
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
        dispatch({type: 'NOTIFICATIONALTER', payload: singleProduct ? singleProduct : 1, value: true});
        toast.success('Item Added');
    };

    return (
        <Col md="5" lg='5' xl="3"
             className='mt-lg-5 '
        >
            <div className={`category-option ${ProductFilter ? 'show' : ''}`}>
                {/*<div className='button-close mb-3'>*/}
                {/*  <Btn attrBtn={{*/}
                {/*    className: 'p-0', onClick: () => {*/}
                {/*      dispatch({ type: 'PRODUCTPAGEFILTER' }); dispatch({ type: 'OVERLAY' });*/}
                {/*    }*/}
                {/*  }}>*/}
                {/*    <ArrowLeft />*/}
                {/*    {Close}*/}
                {/*  </Btn>*/}
                {/*</div>*/}
                <div className='category-name' style={{padding: "32px"}}>
                    <div className="product-checkout-section">
                        <h2 className='price-detail'>
                            ${singleProduct && singleProduct[0]?.price}
                            <del>${singleProduct && singleProduct[0]?.mrp}.00</del>
                            {singleProduct && singleProduct[0]?.discount !== 0 && (
                                <span>
            {singleProduct && singleProduct[0]?.discount}% {OFF}
          </span>
                            )}
                        </h2>
                        <div style={{display: 'flex', alignItems: "center"}}>
                            <span className="dot"></span><h3 style={{color: "black"}}>In stock</h3>
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
                    <div id='selectSize' className='addeffect-section product-description border-product'
                         style={{display: 'flex'}}>
                        <h6 className='product-title product-title-2 d-block' style={{marginRight: "10px"}}>QTNY: </h6>
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
                                <Input type='text' name='quantity' className='form-control input-number' min={0}
                                       value={count} readOnly/>
                                <span className='input-group-prepend'>
            <Btn
                attrBtn={{
                    type: 'button',
                    className: 'quantity-right-plus btn-left-0',
                    onClick: () => {
                        setCount((prev) => (prev < 15 ? count + 1 : 15));
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
                            <a href='#javascript' id='cartEffect'
                               className='btn btn-solid btn-transparent hover-solid btn-animation' onClick={AddtoCart}>
                                {/*<i className='fa fa-shopping-cart'></i>*/}
                                <span>Add To Project</span>
                            </a>
                        </div>
                        <ProductActions singleProduct={singleProduct}/>
                    </div>
                    <div className="sub-product-payments">

                        <ul>
                            <li>
                                <Link href='#javascript'>
                                    <img src={`${CommonPath}/payment-icon/1.jpg`} className='img-fluid'
                                         alt='payment icon'/>
                                </Link>
                            </li>
                            <li>
                                <Link href='#javascript'>
                                    <img src={`${CommonPath}/payment-icon/2.jpg`} className='img-fluid'
                                         alt='payment icon'/>
                                </Link>
                            </li>
                            <li>
                                <Link href='#javascript'>
                                    <img src={`${CommonPath}/payment-icon/3.jpg`} className='img-fluid'
                                         alt='payment icon'/>
                                </Link>
                            </li>
                            <li>
                                <Link href='#javascript'>
                                    <img src={`${CommonPath}/payment-icon/4.jpg`} className='img-fluid'
                                         alt='payment icon'/>
                                </Link>
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

export default LeftsideContain;
