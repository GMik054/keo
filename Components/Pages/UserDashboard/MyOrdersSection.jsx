import React, {Fragment, useCallback, useState} from 'react';
import {Choose, MyOrder} from "../../Constant";
import DataTables from "../../Element/DataTable";
import {headDashboardColumn, headDashboardData} from "../../../Data/DashboardData";
import {Col, Container, Input, Row} from "reactstrap";
import NavSection from "../../Products/Common/NavSection";

const MyOrdersSection = () => {
    const [active, setActive] = useState(1);
    const handleClick = useCallback((value) => {
        setActive(value);
    }, []);
    return (
        <section className='section-b-space' style={{backgroundColor: "white"}}>
            <Container>
                <Row>
                    <h2 style={{marginBottom: "26px"}}>My Orders</h2>
                    <Col lg="12">
                        <Row>
                            <Col lg="3">
                                <div className="my-orders-section-filter">
                                    <h5>PO Number, Order #, Reference #</h5>
                                    <input type='text' className='form-control checkout-form' name='POnumber'
                                           style={{fontSize: "14px", borderColor: "#ced4da"}}
                                           placeholder='Enter Number Here...'/>
                                </div>
                            </Col>
                            <Col lg="2">
                                <div className="my-orders-section-filter">
                                    <h5>Order Status</h5>
                                    <select className='form-select checkout-form form-control' id='validationCustom04'>
                                        <option>All</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg="2">
                                <div className="my-orders-section-filter">
                                    <h5>Date Range</h5>
                                    <select className='form-select checkout-form form-control' id='validationCustom04'>
                                        <option>Last 180 days</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg="2">
                                <div className="my-orders-section-filter" style={{
                                    height: "100%", flexDirection: "column",
                                    display: "flex",
                                    justifyContent: "flex-end"
                                }}>
                                    <div className='product-buttons' style={{marginBottom: "0"}}>
                                        <a href='#javascript' id='cartEffect'
                                           className='btn btn-solid btn-transparent hover-solid btn-animation'>
                                            <span>Clear</span>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="2">
                                <div className="my-orders-section-filter" style={{
                                    height: "100%", flexDirection: "column",
                                    display: "flex",
                                    justifyContent: "flex-end"
                                }}>
                                    <div className='product-buttons' style={{marginBottom: "0"}}>
                                        <a href='#javascript' id='cartEffect'
                                           className='btn btn-solid hover-solid btn-animation'>
                                            <span>Search</span>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="12">
                        <Row>
                            <Col>
                                <div className='cloth-review' style={{padding: "26px 0"}}>
                                    <NavSection active={active} handleClick={handleClick}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="12">
                        <Row className="table-responsive">
                            <div className="sc-dmctIk WQNxq">
                                <Col lg="12" style={{display: "table"}}>
                                    <div className="my-orders-section-info">

                                        <div className="my-orders-section-info-name"><h5>DATE</h5></div>
                                        <div className="my-orders-section-info-name"><h5>ORDER #</h5></div>
                                        <div className="my-orders-section-info-name"><h5>PO #</h5></div>
                                        <div className="my-orders-section-info-name"><h5>REFERENCE #</h5></div>
                                        <div className="my-orders-section-info-name"><h5>STATUS</h5></div>
                                        <div className="my-orders-section-info-name"><h5>TOTAL</h5></div>
                                        <div className="my-orders-section-info-name"><h5>ITEMS</h5></div>
                                        <div className="my-orders-section-info-name"><h5>Image</h5></div>
                                        <div className="my-orders-section-info-name"></div>
                                        {/*<div data-tag="allowRowEvents"><a href="#javascript"><i*/}
                                        {/*    className="far fa-eye"></i></a></div>*/}
                                    </div>
                                </Col>
                                <Col lg="12" style={{display: "table"}}>
                                    <div className="my-orders-section-single-product">
                                        <div className="my-orders-section-single-product-name"><h5>March 12.2023</h5></div>
                                        <div className="my-orders-section-single-product-name"><h5>ZM67DT</h5></div>
                                        <div className="my-orders-section-single-product-name"><h5>Chandon</h5></div>
                                        <div className="my-orders-section-single-product-name"><h5>-</h5></div>
                                        <div className="my-orders-section-single-product-name">
                                            <div className="picked-cancelled picked "><h5>Picked Up</h5></div>
                                        </div>
                                        <div className="my-orders-section-single-product-name"><h5>$ 699.55</h5></div>
                                        <div className="my-orders-section-single-product-name"><h5>QTY: 10</h5></div>
                                        <div className="my-orders-section-single-product-name">
                                            <img src="/assets/images/fashion/product/front/1.jpg"/>
                                        </div>

                                        <Col lg="2" className="my-orders-section-filter" style={{marginLeft: "auto"}}>
                                            <div className='product-buttons' style={{marginBottom: "0"}}>
                                                <a href='#javascript' id='cartEffect'
                                                   className='btn btn-solid btn-transparent hover-solid btn-animation view-details'>
                                                    <span>View Details</span>
                                                </a>
                                            </div>
                                        </Col>
                                    </div>

                                </Col>
                                <Col lg="12" style={{display: "table"}}>
                                    <div className="my-orders-section-single-product">

                                            <div className="my-orders-section-single-product-name"><h5>March
                                                12.2023</h5>
                                            </div>
                                            <div className="my-orders-section-single-product-name"><h5>ZM67DT</h5></div>
                                            <div className="my-orders-section-single-product-name"><h5>Chandon</h5>
                                            </div>
                                            <div className="my-orders-section-single-product-name"><h5>-</h5></div>
                                            <div className="my-orders-section-single-product-name">
                                                <div className="picked-cancelled cancelled"><h5>Cancelled</h5></div>
                                            </div>
                                            <div className="my-orders-section-single-product-name"><h5>$ 699.55</h5>
                                            </div>
                                            <div className="my-orders-section-single-product-name"><h5>QTY: 10</h5>
                                            </div>
                                            <div className="my-orders-section-single-product-name">
                                                <img src="/assets/images/electronics/product/png/5.png"/>
                                            </div>

                                            <Col lg="2" className="my-orders-section-filter" style={{marginLeft: "auto"}}>
                                                <div className='product-buttons' style={{marginBottom: "0"}}>
                                                    <a href='#javascript' id='cartEffect'
                                                       className='btn btn-solid btn-transparent hover-solid btn-animation view-details'>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                        </Col>

                                    </div>
                                </Col>
                            </div>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MyOrdersSection;