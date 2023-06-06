import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import {APICallUrl, CommonPath} from '../../Constant';
import DynamicRating from '../../Element/DynamicRating';

const RightTab = ({ elem, LeftRightTab }) => {
  const { symbol, currencyValue } = useSelector((state) => state.CurrencyReducer);

  return (
    <>
      {/*{elem.childtype === 'rightbanners' && (*/}
        <Col lg='4' md='6'>
          <div className='product-list'>
            {elem?.map((item, i) => {
                let count = 0;
                let sum = item.reviews.reduce(function (sum, item, index) {
                    count += item.star;
                    return sum + item.star * (index + 1);
                }, 0);
              return (
                <div className={`${LeftRightTab ? LeftRightTab : 'product-box product-box1'}`} key={i}>
                  <div className='img-wrapper bg-transparent'>
                    <Link href={'/product/product_left_sidebar/21'} className='text-center'>
                      <img src={`${APICallUrl}/${item.image}`} className='img-fluid' alt='products' />
                    </Link>
                  </div>
                  <div className='product-details'>
                    <h3 className='theme-color'>
                        {symbol}{item?.front_sale_price !==null || undefined ?item?.front_sale_price.toFixed(2):item?.price}
                        {item?.front_sale_price !==null || undefined ?  <span className='font-light ms-2'>{symbol}{item?.price.toFixed(2)}</span>:""}
                        {/*{(item.price * currencyValue).toFixed(2)}*/}

                    </h3>
                    <Link href={'/product/product_left_sidebar/25'} className='font-default'>
                      <h5>{item.name}</h5>
                    </Link>
                    <DynamicRating data={Math.round(sum / count)} />
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

export default RightTab;
