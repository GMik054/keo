import React from 'react';
import {Col, Container, Row} from "reactstrap";
import UserNav from "./UserNav";
import {Addtocart, CommonPath, ShopNow} from "../../Constant";
import {Btn} from "../../AbstractElements";

const MyAccountMainSection = () => {
    return (
        <section className='section-b-space'>
            <Container>
                <Row>
                    <h2 style={{marginBottom:"16px"}}>My Account</h2>
                    <Col lg="5">
                        <Row>
                            <Col lg="12">
                                <div className="account-section-div size-180" style={{backgroundColor: "#FFD84F"}}>
                                    <div className='for-size-180'>
                                        <img src={`${CommonPath}/my-account/1.png`}/>
                                        <h4>My Orders</h4>
                                    </div>
                                    <div className="for-size-180-button">
                                        <h3 style={{color: "var(--theme-color)"}}>View Orders</h3>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="6">
                                <div className="account-section-div size-302" style={{backgroundColor: "#00B6CB"}}>
                                    <div className='for-size-302'>
                                        <div className="img-div">
                                            <img src={`${CommonPath}/my-account/5.png`}/>
                                        </div>

                                        <h4 style={{color: "white"}}>My Orders</h4>
                                    </div>
                                    <div className="main-div-for-300"/>
                                    <div className="for-size-302-button">
                                        <h3 style={{color: "white"}}>Account History</h3>
                                        <h3 style={{color: "white"}}>Account Inquiry</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="account-section-div size-302" style={{backgroundColor: "#A3E7ED"}}>
                                    <div className='for-size-302'>
                                        <div className="img-div">
                                            <img src={`${CommonPath}/my-account/6.png`}/>
                                        </div>

                                        <h4>Returns</h4>
                                    </div>
                                    <div className="main-div-for-300"/>
                                    <div className="for-size-302-button">
                                        <h3>Return Status</h3>
                                        <h3>Start a Return</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="account-section-div size-180" style={{backgroundColor: "#B62427"}}>
                                    <div className='for-size-180'>
                                        <img src={`${CommonPath}/my-account/10.png`}/>
                                        <h4 style={{color: "white"}}>My Projects</h4>
                                    </div>
                                    <div className="for-size-180-button">
                                        <h3 style={{color: "white"}}>View Projects</h3>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="2">


                        <Row  style={{
                            height: " 100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                            <Col lg="12">
                                <div className="account-section-div size-302 size-340"
                                     style={{backgroundColor: "#CACDFE"}}>
                                    <div className='for-size-302'>
                                        <div className="img-div">
                                            <img src={`${CommonPath}/my-account/2.png`}/>
                                        </div>

                                        <h4>Order Tools</h4>
                                    </div>
                                    <div className="main-div-for-300"/>
                                    <div className="for-size-302-button">
                                        <h3>My List</h3>
                                        <h3>Quick Order</h3>
                                        <h3>Recent Purchases</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="12">

                                <div className="account-section-div size-302 size-340"
                                     style={{backgroundColor: "#FFD84F"}}>
                                    <div className='for-size-302'>
                                        <div className="img-div">
                                            <img src={`${CommonPath}/my-account/7.png`}/>
                                        </div>
                                        <h4>Account</h4>
                                    </div>
                                    <div className="main-div-for-300"/>
                                    <div className="for-size-302-button">
                                        <h3>Account Details</h3>
                                        <h3>Edit Address</h3>
                                        <h3>Password Change</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </Col>
                    <Col lg="5">
                        <Row>
                            <Col lg="12">
                                <div className="account-section-div size-300"
                                     style={{backgroundColor: "#B62427", justifyContent: "space-between"}}>
                                    <div className="for-size-300">
                                        <img src={`${CommonPath}/my-account/3.png`} style={{maxWidth: "70px"}}/>
                                        <div>
                                            <h5 style={{color: "white"}}>Current Balance</h5>
                                            <h2 style={{color: "white", marginTop: "6px"}}>$ 7, 425.085</h2>
                                        </div>
                                    </div>
                                    <div className="for-size-300" style={{alignItems: "center"}}>
                                        <img src={`${CommonPath}/my-account/4.png`}
                                             style={{margin: "0 auto", maxWidth: "190px", position: "absolute"}}/>
                                        <div style={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-end"
                                        }}>
                                            <div className='product-buttons'
                                                 style={{position: "relative", marginBottom: "10px"}}>
                                                <a href='#javascript' id='cartEffect'
                                                   className='btn btn-solid hover-solid btn-animation'
                                                   style={{backgroundColor: "white", color: "var(--theme-color)"}}>
                                                    <span>Make a Payment</span>
                                                </a>
                                            </div>
                                            <h5 style={{
                                                color: "white",
                                                margin: "0 auto",
                                                textDecoration: "underline"
                                            }}>View Payment History</h5>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="account-section-div size-180" style={{backgroundColor: "#8FED94"}}>
                                    <div className='for-size-180'>
                                        <img src={`${CommonPath}/my-account/8.png`}/>
                                        <h4>Promos</h4>
                                    </div>
                                    <div className="for-size-180-button">
                                        <h3>View Promos</h3>
                                    </div>

                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="account-section-div size-180" style={{backgroundColor: "#FFA451"}}>
                                    <div className='for-size-180'>
                                        <img src={`${CommonPath}/my-account/9.png`}/>
                                        <h4 style={{color: "white"}}>My Projects</h4>
                                    </div>
                                    <div className="for-size-180-button">
                                        <h3 style={{color: "white"}}>Website Support</h3>
                                        <h3 style={{color: "white"}}>Orders & Invocies</h3>
                                        <h3 style={{color: "white"}}>Shipping & Pickup</h3>
                                    </div>

                                </div>
                            </Col>

                        </Row>

                    </Col>

                </Row>


            </Container>
        </section>
    );
};

export default MyAccountMainSection;