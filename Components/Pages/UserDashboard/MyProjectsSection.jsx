import React from 'react';
import {Container, Col, Row} from "reactstrap";
import NavSection from "../../Products/Common/NavSection";

const MyProjectsSection = () => {
    return (
        <section className='section-b-space' style={{backgroundColor: "white"}}>
            <Container>
                <Row>
                    <h2 style={{marginBottom: "26px"}}>My Projects</h2>

                    <Col lg="12">
                        <Row className="table-responsive">
                            <div className="sc-dmctIk WQNxq">
                                <Col lg="12" xs="12">
                                    <div className="my-orders-section-info">
                                        <Row style={{width: "100%"}}>
                                            <Col lg="6" xs="6">
                                                <div className="my-orders-section-info-name"><h5>NAME</h5></div>
                                            </Col>
                                            <Col lg="6" xs="6">
                                                <div className="my-orders-section-info-name"><h5>DATE ADDED</h5></div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="my-orders-section-single-product">
                                        <Col lg="3" xs="3">
                                            <div className="my-orders-section-single-product-name"
                                                 style={{maxWidth: "100%"}}><h5>Default Project</h5></div>
                                        </Col>
                                        <Col lg="3" xs="3">
                                            <div className="my-orders-section-single-product-name"
                                                 style={{maxWidth: "100%"}}>
                                                <img style={{width: '18px', margin: "0 6px 0 0"}}
                                                     src={"/assets/images/rename.png"}/>
                                                <h5>Rename</h5></div>
                                        </Col>
                                        <Col lg="3" xs="3">
                                            <div className="my-orders-section-single-product-name"
                                                 style={{maxWidth: "100%"}}><h5>November 24, 2022</h5></div>
                                        </Col>
                                        <Col lg="2" style={{marginLeft: "auto"}}>
                                            <div className="my-orders-section-filter">
                                                <div className='product-buttons' style={{marginBottom: "0"}}>
                                                    <a href='#javascript' id='cartEffect'
                                                       className='btn btn-solid btn-transparent hover-solid btn-animation view-details'>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="my-orders-section-single-product">
                                        <Col lg="3" xs="3">
                                            <div className="my-orders-section-single-product-name"
                                                 style={{maxWidth: "100%"}}><h5>List for June</h5></div>
                                        </Col>
                                        <Col lg="3" xs="3">
                                            <div className="my-orders-section-single-product-name"
                                                 style={{maxWidth: "100%"}}>
                                                <img style={{width: '18px', margin: "0 6px 0 0"}}
                                                     src={"/assets/images/rename.png"}/>
                                                <h5>Rename</h5></div>
                                        </Col>
                                        <Col lg="3" xs="3">
                                            <div className="my-orders-section-single-product-name"
                                                 style={{maxWidth: "100%"}}><h5>March 19, 2023z</h5></div>
                                        </Col>
                                        <Col lg="2" style={{marginLeft: "auto"}}>
                                            <div className="my-orders-section-filter">
                                                <div className='product-buttons' style={{marginBottom: "0"}}>
                                                    <a href='#javascript' id='cartEffect'
                                                       className='btn btn-solid btn-transparent hover-solid btn-animation view-details'>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <Row>
                                        <Col lg="12">
                                            <div style={{display: "flex", justifyContent: "end",margin:"30px 0"}}>

                                                    <div className='product-buttons' style={{margin:"0 10px 0 0", maxWidth:'230px',width:"100%"}}>
                                                        {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                                                        <a id='cartEffect'
                                                           className='btn btn-solid btn-transparent hover-solid btn-animation'>
                                                            {/*<i className='fa fa-shopping-cart'></i>*/}
                                                            <span>Create New Project</span>
                                                        </a>
                                                    </div>

                                                    <div className='product-buttons' style={{margin:"0 0 0 10px",maxWidth:'230px',width:"100%"}}>
                                                        {/*<ProductWishListAction singleProduct={singleProduct} />*/}
                                                        <a href='#javascript' id='cartEffect'
                                                           className='btn btn-solid hover-solid btn-animation'>
                                                            {/*<i className='fa fa-shopping-cart'></i>*/}
                                                            <span>Save Projects</span>
                                                        </a>
                                                    </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MyProjectsSection;