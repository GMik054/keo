import React from 'react';
import {Col, Row} from 'reactstrap';
import {APICallUrl, CommonPath} from "../../Constant";

const FashionPopularCard = ({popularCard}) => {

        let fixMaxCount = 6;

        let set = (s) => {
            console.log(s)
        }
        return (
            <>
                <Col lg='12'

                     className="the-last-div">
                    <Row className="the-last">
                        {
                            popularCard ?
                                [...Array(Math.ceil(popularCard.sort(function (a, b) {
                                    return a.order - b.order
                                })?.length / fixMaxCount))]?.map((c, countIndex, lastDiv) => {

                                    let indexOfLastEl = (countIndex + 1) * fixMaxCount;
                                    let indexOfFirstEl = indexOfLastEl - fixMaxCount;
                                    let currentEl = popularCard.slice(indexOfFirstEl, indexOfLastEl)

                                    // let value = countIndex + 1
                                    // console.log(lastDiv.length - 1, "lastDiv")
                                    // console.log(  indexOfLastEl ,"indexOfLastEl")

                                    return (
                                        <Col
                                            className={`the-last-div `}
                                            // value={d.length-1}
                                            key={countIndex}
                                            xl='12'
                                            // lg='4'
                                            // md='6'
                                            // sm='6'
                                            // xs='6'
                                            // style={{display: "flex"}}
                                        >
                                            <Row style={{gridGap: "28px 0"}}>
                                                {currentEl.map((el, makeIndex) => {
                                                    // console.log(makeIndex, "makeIndex")
                                                    return (
                                                        <Col
                                                            className={`the-last-div-col ${lastDiv.length - 1 !== countIndex  ?"": "res-div"}`}
                                                            value={makeIndex}
                                                            xl="2"
                                                            lg="4"
                                                            xs='6'
                                                            // xs='12'
                                                            key={makeIndex + 1}>
                                                            <div className="category-shop-home">
                                                                <div className='category-logos'>
                                                                    <a>
                                                                        <img src={`${APICallUrl}/storage/${el.image}`}
                                                                             alt='furniture'/>
                                                                    </a>
                                                                </div>
                                                                <h4>{el.name}</h4>

                                                                {/*{*/}
                                                                {/*    // currentEl.length === 6*/}
                                                                {/*    d.length-1 !==countIndex   ?*/}
                                                                {/*        <div className="after-col-id"/> : ""}*/}
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
            </>
        );
    }
;
export default FashionPopularCard;
