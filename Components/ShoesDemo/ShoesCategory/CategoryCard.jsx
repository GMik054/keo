import Link from 'next/link';
import React from 'react';
import {useSelector} from 'react-redux';
import Slider from 'react-slick';
import {ShoesCategorySlider} from '../../../Data/SliderSettingsData';
import {CommonPath} from '../../Constant';

const CategoryCard = ({ShoesFilter}) => {
        const {symbol, currencyValue} = useSelector((state) => state.CurrencyReducer);
        return (
            <div className='category-wrapper category-slider white-arrow'>
                <Slider {...ShoesCategorySlider}>
                    {ShoesFilter?.map((el) => {
                        return el.children.map((elem, i) => {
                            return (
                                <div key={i}>
                                    <div className='category-wrap category-color' style={{justifyContent: "center"}}>
                                        <Link href={'/shop/shop_left_sidebar'}>

                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                maxWidth: "200px",
                                                width: "100%",
                                                maxHeight: "47px",
                                            }}>
                                                <img
                                                    src={`${CommonPath}/${elem.image}`} className='img-fluid'
                                                    alt='category image'/>
                                            </div>


                                            {/*<div className='id-content id-text t-text'>*/}
                                            {/*  <span>*/}
                                            {/*    {symbol}*/}
                                            {/*    {elem.startingPrice * currencyValue} - {symbol}*/}
                                            {/*    {elem.endiginPrice * currencyValue}*/}
                                            {/*  </span>*/}
                                            {/*</div>*/}


                                            <h3 style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                margin: "30px 0 0",
                                                color:"black"
                                            }}>{elem.title}</h3>


                                        </Link>
                                    </div>
                                </div>
                            );
                        });
                    })}
                </Slider>
            </div>
        );
    }
;

export default CategoryCard;
