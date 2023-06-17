import {useRouter} from 'next/router';
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Col, Media, Row} from 'reactstrap';
import {CommonPath} from '../../Components/Constant';
import DynamicRating from '../../Components/Element/DynamicRating';
import NoProductFound from './NoProductFound';

const SearchSuggestion = ({FilteredData, Is_Focus}) => {
    const router = useRouter();
    const getProductDetail = (value) => {
        // router.push(`/product/product_left_sidebar/${value.id}`);
    };
    const {symbol, currencyValue} = useSelector((state) => state.CurrencyReducer);
    return (
        <>
            {FilteredData?.length != 53 ? (
                <>
                    {FilteredData?.length > 0 ? (
                        <div className='search-suggestion search-suggestion-2'>

                            <Row>
                                <Col xl='4' lg="3" md="12" style={{borderRight: "1px solid #EFF2F7"}}>
                                    <div className="search-brand-category">
                                        <h3>BRANDS</h3>
                                        <div>
                                            <h4>Invision</h4>
                                            <h4>Imac</h4>
                                        </div>
                                    </div>
                                    <div className="search-brand-category">
                                        <h3> CATEGORIES</h3>
                                        <div>
                                            <h4>IP Cameras</h4>
                                            <h4>IP PTZ</h4>
                                            <h4>Infrared</h4>
                                            <h4>In-Wall</h4>
                                            <h4>In-Ceiling</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl='8' lg="9" md='12'>
                                    <div className="search-brand-category">
                                        <div style={{display: "flex", justifyContent: "space-between",margin: "0 calc(2px + 6 * (100vw - 320px) / 1600) 0 calc(2px + 6 * (100vw - 320px) / 1600)"}}>
                                            <h3>PRODUCTS</h3>
                                            <a style={{textDecoration:"underline",color:"var(--theme-color)"}}><h3 style={{color:"var(--theme-color)"}}>View All</h3></a>
                                        </div>

                                        <ul className='custom-scroll'>
                                            {FilteredData.map((elem) => {
                                                return (
                                                    <Fragment key={elem.id}>
                                                        {elem.category !== 'vr' && (
                                                            <>
                                                                {Is_Focus && (
                                                                    <li>
                                                                        <Media className='product-cart'>
                                                                            {/*<div className='media-image'>*/}
                                                                            {/*  {elem?.images.slice(0, 1).map((img, i) => (*/}
                                                                            {/*    <img src={`${CommonPath}/${img.src}`} className='img-fluid' alt='demo-image' key={i} />*/}
                                                                            {/*  ))}*/}
                                                                            {/*</div>*/}
                                                                            <Media body>
                                                                                <div className='media-image'>
                                                                                    {elem?.images.slice(0, 1).map((img, i) => (
                                                                                        <img
                                                                                            src={`${CommonPath}/${img.src}`}
                                                                                            className='img-fluid'
                                                                                            alt='demo-image' key={i}/>
                                                                                    ))}
                                                                                </div>
                                                                                <a onClick={() => getProductDetail(elem)}
                                                                                   className="mt-1">
                                                                                    <h6 className='mt-1 mb-1'>{elem.name}</h6>
                                                                                </a>
                                                                                <div>
                                                                                    <span className='font-bold ml-1'># PA-SM21 • # 141844</span>
                                                                                </div>
                                                                                <p className='mb-0 mt-1'>
                                                                                    {symbol} {(elem.price * currencyValue).toFixed(2)}
                                                                                </p>
                                                                                <DynamicRating data={elem.ratingStars}
                                                                                               customeclass={'p-0'}/>

                                                                            </Media>
                                                                        </Media>
                                                                    </li>
                                                                )}
                                                            </>
                                                        )}
                                                    </Fragment>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                </Col>

                            </Row>

                        </div>
                    ) : (
                        <NoProductFound/>
                    )}
                </>
            ) : (
                ''
            )}
        </>
    );
};

export default SearchSuggestion;
