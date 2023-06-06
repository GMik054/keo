import React from 'react';
import {Col, Row} from 'reactstrap';
import {APICallUrl, CommonPath, ShopNow} from "../../Constant";
import {Btn} from "../../AbstractElements";
import {SortingByOrderFunction} from "../../../Utils/sortingFunctions";

const PopularCard = ({brands}) => {
        let fixMaxCount = 3;
        let brand = SortingByOrderFunction(brands)[0];
        let otherBrands = SortingByOrderFunction(brands).slice(1);

        return (
            <>
                <Col xl='4' lg='12'>
                    {brand ? <div className='product-slider round-arrow'>
                        <img src={`${APICallUrl}/storage/${brand?.logo}`} alt={brand?.alt} title={brand?.title}
                             style={{margin: "30px 0 20px", maxWidth: "170px", width: "100%"}}/>
                        <h2>NEW BRANDS BY {brand?.name}</h2>
                        <div className="product-slider-div">
                            <p className="product-slider-p">at KOA</p>
                        </div>

                        <img src={`${CommonPath}/vegetable/eqqww.png`} style={{maxWidth: "380px", width: "100%"}}/>
                        <div style={{paddingBottom: "40px"}}>
                            <Btn
                                attrBtn={{
                                    className: 'btn-solid-default',
                                    onClick: () => router.push('/shop/shop_left_sidebar'),
                                }}>
                                {ShopNow}
                            </Btn>
                        </div>
                    </div> : ""
                    }

                </Col>
                <Col xl='8' lg='12'>
                    <Row className="first-row-top-brand">
                        {
                            brands ?
                                [...Array(Math.ceil(otherBrands?.length / fixMaxCount))]?.map((c, countIndex) => {

                                    let indexOfLastEl = (countIndex + 1) * fixMaxCount;
                                    let indexOfFirstEl = indexOfLastEl - fixMaxCount;
                                    let currentEl = otherBrands.slice(indexOfFirstEl, indexOfLastEl)
                                    // console.log(currentEl)


                                    return (
                                        <Col key={countIndex} lg='12'>
                                            <Row className="row-top-brand-logos">
                                                {
                                                    currentEl?.map((el, makeIndex) => {
                                                        return (
                                                            <Col lg='4' md='4' xs='12' key={makeIndex + 1}>
                                                                <div className='top-brand-logos'>
                                                                    <a>
                                                                        <img src={`${APICallUrl}/storage/${el.logo}`}
                                                                             alt={el.alt} title={el.title}
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </Col>

                                                        )
                                                    })
                                                }
                                            </Row>

                                        </Col>

                                    )
                                }) : ""
                        }
                    </Row>
                </Col>
                {/*  return (*/}
                {/*    <Col lg='2'>*/}
                {/*      /!*<div className='title-3 pb-4 title-border'>*!/*/}
                {/*      /!*  <h2>{elem.heading}</h2>*!/*/}
                {/*      /!*  <h5 className='theme-color'>{elem.subHeading}</h5>*!/*/}
                {/*      /!*</div>*!/*/}
                {/*      <div className='product-slider round-arrow'>*/}
                {/*        <Slider {...FurnitureThreeSlider}>*/}
                {/*          <SliderCard elem={popularCard[0]} />*/}
                {/*          /!*<SliderCard elem={elem} />*!/*/}
                {/*        </Slider>*/}
                {/*      </div>*/}
                {/*    </Col>*/}
                {/*  );*/}
                {/*})}*/}
            </>
        );
    }
;
export default PopularCard;
