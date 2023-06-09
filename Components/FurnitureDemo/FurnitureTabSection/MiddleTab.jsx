import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import {APICallUrl, CommonPath} from '../../Constant';
import DynamicRating from '../../Element/DynamicRating';

const MiddleTab = ({ elem, TabMiddleColor, LeftRightTab }) => {
  const { symbol, currencyValue } = useSelector((state) => state.CurrencyReducer);
  // console.log(currencyValue,"b")
  let count = 0;
  let sum = elem.reviews.reduce(function (sum, item, index) {
    count += item.star;
    return sum + item.star * (index + 1);
  }, 0);
  return (
    <>
      {/*{elem.childtype === 'middlebanner' && (*/}
        <Col lg='4' className='order-lg-0 order-1'>
          <div className='product-banner product-banner-circle'>
            <div className={`${LeftRightTab ? LeftRightTab : 'product-box product-box1'}`}>
              <div className='img-wrapper bg-transparent'>
                <div className='label-block'>
                  {/*<span className='label label-black'>{elem.lefttag}</span>*/}
                  {/*<span className='label label-theme'>{elem.righttag}</span>*/}
                </div>
                {/*<Link href={'/product/product_left_sidebar/21'}>*/}
                  <img src={`${APICallUrl}/${elem?.image}`} className='img-fluid' alt='furniture' />
                {/*</Link>*/}
                {/*<div className={`${TabMiddleColor ? TabMiddleColor : 'offer-end offer-end-demo4'}`}>*/}
                {/*  <h3>{elem.heading}</h3>*/}
                {/*  <h6>{elem.subheading}</h6>*/}
                {/*</div>*/}
              </div>

              <div className='product-details text-center'>
                <h3 className='theme-color'>
                  {symbol}
                  {elem?.front_sale_price !==null || undefined ?elem?.front_sale_price.toFixed(2):elem?.price}
                  {elem?.front_sale_price !==null || undefined ?  <span className='font-light ms-2'>{symbol}{elem?.price.toFixed(2)}</span>:""}
                </h3>
                <a href='#javascript' className='font-default' tabIndex='-1'>
                  <h5 className='main-title'>{elem?.name}</h5>
                </a>
                <DynamicRating data={Math.round(sum / count)} customeclass={'rating-2'} />
              </div>
            </div>
          </div>
        </Col>
      {/*)}*/}
    </>
  );
};

export default MiddleTab;
