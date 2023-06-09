import Link from 'next/link';
import React, {Fragment, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {APICallUrl, CommonPath, NEW} from '../../Constant';
import AddToCartProduct from '../../Element/AddToCart';
import AddtoCartBtn from '../../Element/AddtoCartBtn';
import AddToWishList from '../../Element/AddToWishList';
import CompareProducts from '../../Element/CompareProducts';
import DynamicRating from '../../Element/DynamicRating';
import Img from '../../Element/Images';
import ModelViewProduct from '../../Element/ModelViewProduct';
import SkeletonLoader from '../../Element/SkeletonLoader';
import {Btn} from "../../AbstractElements";
// import {logTar} from "npm/lib/utils/tar";

const AllProducts = ({currentData}) => {
    const {symbol, currencyValue} = useSelector((state) => state.CurrencyReducer);
    const {initialGrid} = useSelector((state) => state.AllGridReducer);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(initialGrid,"initialGrid")

        useEffect(() => {
            setIsLoading(true); // Set isLoading to true when currentData changes
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }, [currentData]);
        console.log(currentData,"dd")
    return (
        <div
            className={`row g-sm-4 g-3 gx-sm-4 gx-3 mt-1 row-cols-1 row-cols-sm-2 row-cols-xl-4 custom-gy-5 product-style-2 ratio_asos product-list-section ${initialGrid}`}>
            {currentData?.map((elem) => {
                // console.log(elem)
                return (
                    <Fragment key={elem.id}>
                        {isLoading ? (
                            <SkeletonLoader/>
                        ) : (
                            <div>
                                <div className='product-box'
                                     style={{backgroundColor: "white", padding: "16px", borderRadius: "20px"}}>
                                    <div className='img-wrapper' style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "white"
                                    }}>
                                        <Link href={'/product/product_left_sidebar/35'}
                                              style={{
                                                  margin: "0 auto",
                                                  display: "flex",
                                                  alignItems: "flex-end",
                                                  minHeight: "116px",

                                              }}
                                              className='text-center'>
                                            <img src={`${APICallUrl}/storage/${elem.image}`}
                                                 style={{maxHeight: "116px", maxWidth: "160px"}}
                                                 className='bg-img'
                                                 alt='poster'
                                            />

                                        </Link>


                                        {/*<div className='cart-wrap'>*/}
                                        {/*  <ul>*/}
                                        {/*    <AddToCartProduct elem={elem} />*/}
                                        {/*    <ModelViewProduct elem={elem} />*/}
                                        {/*    <CompareProducts elem={elem} />*/}
                                        {/*    <AddToWishList elem={elem} />*/}
                                        {/*  </ul>*/}
                                        {/*</div>*/}
                                    </div>
                                    {/*<div className='product-details'>*/}
                                    {/*  <div className='rating-details'>*/}
                                    {/*    <span className='font-light grid-content'>{elem?.id !== 'none' ? elem?.id : elem?.type}</span>*/}
                                    {/*    <DynamicRating customeclass={'mt-0'} data={elem.ratingStars} />*/}
                                    {/*  </div>*/}
                                    {/*  <div className='main-price'>*/}
                                    {/*    <Link href={`/product/product_left_sidebar/${elem.id}`} className='font-default'>*/}
                                    {/*      <h5 className='ms-0'>{elem.name}</h5>*/}
                                    {/*    </Link>*/}
                                    {/*    <div className='listing-content'>*/}
                                    {/*      <span className='font-light'>{elem.size}</span>*/}
                                    {/*      <p className='font-light'>{elem.description}</p>*/}
                                    {/*    </div>*/}
                                    {/*    <h3 className='theme-color'>*/}
                                    {/*      {symbol}*/}
                                    {/*      {(elem.price * currencyValue).toFixed(2)}*/}
                                    {/*    </h3>*/}
                                    {/*    <AddtoCartBtn customeclass={'listing-content'} btn={true} data={elem} />*/}
                                    {/*  </div>*/}
                                    {/*</div>*/}
                                    <div className='product-details'>
                                        <a href='#javascript' className='font-default'>
                                            <h5 style={{margin: "16px 0"}}>{elem.name}</h5>
                                        </a>
                                        <div style={{margin: "16px 0"}}>
                                            <div className='font-light ml-1' style={{fontSize:"12px"}}># {elem.sku}</div>
                                            <div className='font-light ml-1' style={{fontSize:"12px"}}># {elem.eclipse_number}</div>
                                        </div>
                                        <ul style={{listStylePosition: "inside", margin: "16px 0"}}>
                                            <li className="li-home-products" style={{display: "block"}}>Special
                                                Order
                                            </li>
                                            <li className="li-home-products" style={{display: "block"}}>Free
                                                Store Pick-up
                                            </li>
                                            <li className="li-home-products" style={{display: "block"}}>Free
                                                Shipping $1K+ Orders
                                            </li>
                                        </ul>
                                        <h3 className='theme-color fw-6-1' style={{margin: "16px 0"}}>
                                            {symbol}
                                            {elem?.front_sale_price !== null || undefined ? elem?.front_sale_price.toFixed(2) : elem?.price}
                                            {(elem?.front_sale_price !== null || undefined) && (elem?.front_sale_price !== elem?.price) ? <span
                                                className='font-light ms-2'>{symbol}{elem?.price.toFixed(2)}</span> : ""}
                                        </h3>

                                        <DynamicRating data={elem.ratingStars}/>
                                        <div className="shop-product-desc">
                                            <Btn attrBtn={{className: "m-1 btn-solid-default btn-sm"}}>
                                                Buy Now
                                            </Btn>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        )}
                    </Fragment>
                );
            })}
        </div>
    );
}
    ;

    export default AllProducts;
