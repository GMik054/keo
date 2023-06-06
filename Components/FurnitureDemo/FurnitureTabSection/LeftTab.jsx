import Link from 'next/link';
import React from 'react';
import {Col} from 'reactstrap';
import {APICallUrl, CommonPath} from '../../Constant';
import DynamicRating from '../../Element/DynamicRating';
import {useSelector} from "react-redux";

const LeftTab = ({elem, LeftRightTab}) => {
    // console.log(elem,"A")

    const { symbol, currencyValue } = useSelector((state) => state.CurrencyReducer);
    return (
        <>
            {/*{elem.childtype === 'leftbanners' && (*/}
            <Col lg='4' md='6'>
                <div className='product-list'>
                    {elem?.map((result, i) => {
                        // console.log(result,"result")
                        let count = 0;
                        let sum = result.reviews.reduce(function (sum, item, index) {
                            count += item.star;
                            return sum + item.star * (index + 1);
                        }, 0);
                        return (
                            <div className={`${LeftRightTab ? LeftRightTab : 'product-box product-box1'}`} key={i}>
                                <div className='img-wrapper bg-transparent'>
                                    <Link href={'/product/product_left_sidebar/21'} className='text-center'>
                                        <img src={`${APICallUrl}/storage/${result.image}`} className='img-fluid'
                                             alt='furniture'/>
                                    </Link>
                                    <div className='circle-shape'></div>
                                </div>
                                <div className='product-details'>
                                    <h3 className='theme-color'>
                                        {symbol}{result?.front_sale_price !==null || undefined ?result?.front_sale_price.toFixed(2):result?.price}
                                        {result?.front_sale_price !==null || undefined ?  <span className='font-light ms-2'>{symbol}{result?.price.toFixed(2)}</span>:""}
                                    </h3>
                                    <Link href={'/product/product_left_sidebar/21'} className='font-default'>
                                        <h5>{result.name}</h5>
                                    </Link>

                                    <DynamicRating data={Math.round(sum / count)}/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Col>
            {/*)}*/}
        </>
    );
};

export default LeftTab;
