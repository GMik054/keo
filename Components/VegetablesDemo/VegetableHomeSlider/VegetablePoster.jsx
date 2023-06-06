import React, {Fragment} from 'react';
import Slider from 'react-slick';
import {MainHomeSlider, VegetableMainSlider} from '../../../Data/SliderSettingsData';
import {APICallUrl, CommonPath, ShopNow} from '../../Constant';
import {Btn} from "../../AbstractElements";
import {useRouter} from "next/router";

const VegetablePoster = ({VegetableSlider, nav2, slider1, slider}) => {
    const router = useRouter();
    return (
        <div className='poster-image slider-for custome-arrow classic-arrow-1' style={{height:"100%"}}>
            <Slider
                style={{height:"100%"}}
                asNavFor={nav2}
                {...MainHomeSlider}
                ref={(slider) => (slider1.current = slider)}
            >
                {slider?.map((el,i) => {
                    // console.log(el)
                    // return el.backgroundimages.map((elem, i) => {
                        return (
                            <div key={i}>
                                <Fragment key={i}>
                                    <div className='left-side-contain'>
                                        <div className='banner-left'>
                                            <h2>
                                                {el.title}
                                                {/*<span className='theme-color'>{elem.discount}</span>*/}
                                            </h2>
                                            <h1>
                                                {/*{elem.heading}*/}
                                                IN STOCK NOW
                                                {/*<span>{elem.headingbottom}</span>*/}
                                            </h1>
                                            {/*<p>*/}
                                            {/*  {elem.bottomtitletop} <span className='theme-color'>{elem.bottomtitlebottom}</span>*/}
                                            {/*</p>*/}
                                            {/*<h2>*/}
                                            {/*  {symbol}*/}
                                            {/*  {(elem.price * currencyValue).toFixed(2)}*/}
                                            {/*  <span className='theme-color'>*/}
                                            {/*    <del>*/}
                                            {/*      {symbol}*/}
                                            {/*      {(elem.mrp * currencyValue).toFixed(2)}*/}
                                            {/*    </del>*/}
                                            {/*  </span>*/}
                                            {/*</h2>*/}
                                            {/*<p className='poster-details'>{elem.description}</p>*/}
                                            <div className='banner-btn-grup'>
                                                <Btn
                                                    attrBtn={{
                                                        className: 'btn-solid-default button-top-left',
                                                        onClick: () => router.push(`/${el.link}`),
                                                    }}>
                                                    {ShopNow}
                                                </Btn>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                                <img src={`${APICallUrl}/storage/${el.image}`}  className='img-fluid' alt='slider'/>
                            </div>
                        );
                    // });
                })}
            </Slider>
        </div>
    );
};

export default VegetablePoster;
