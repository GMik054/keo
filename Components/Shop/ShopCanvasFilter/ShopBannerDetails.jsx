import React, {Fragment} from 'react';
import {bannerdescription, CommonPath, shopdescription, ShopNow, ShopTheLatestTrends} from '../../Constant';
import Img from '../../Element/Images';
import {Btn} from "../../AbstractElements";

const ShopBannerDetails = () => {
  return (
    <div className='banner-deatils'>
      <div className='banner-image'>
        <Img src={`${CommonPath}/fashion/banner.jpg`} className='img-fluid bg-img' alt='fashion' />
        {/*<div className='banner-content'>*/}
        {/*  <div>*/}
        {/*    <h3>{ShopTheLatestTrends}</h3>*/}
        {/*    <p>{shopdescription}</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
          <Fragment>
              <div className='category-banner-button' style={{
                  position: "absolute",
                  bottom: "6%",
                  right: "2.5%",
              }}>
                          <Btn
                              attrBtn={{
                                  className: 'btn-solid-default ',
                                  onClick: () => router.push('/shop/shop_left_sidebar'),
                              }}>
                              {ShopNow}
                          </Btn>
              </div>
          </Fragment>
      </div>
      {/*<div className='banner-contain mt-3 mb-5'>*/}
      {/*  <p className='font-light'>{bannerdescription}</p>*/}
      {/*</div>*/}
    </div>
  );
};

export default ShopBannerDetails;
