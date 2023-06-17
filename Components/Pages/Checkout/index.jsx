import React, {useState} from 'react';
import {Col, Container, Input, Row} from 'reactstrap';
import {Billingaddress} from '../../Constant';
import CheckoutForm from './CheckoutForm';
import SideBarCartBox from './SideBarCartBox';
import PaymantMode from "./PaymantMode";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../ReduxToolkit/Slices/LoginSlice";

const SectionCheckout = () => {
    const [checkBox, setCheckBox] = useState(false)
    let userAuth = useSelector(selectAuthUser)
    // console.log(userAuth,"userAuth")
    return (
        <section className='section-b-space' style={{backgroundColor: "white", paddingBottom: "0"}}>
            <Container>
                <Row className='g-4'>
                    <Col lg='8'>

                        <h2 className='mb-3' style={{paddingLeft: "0"}}>Billing Details</h2>
                        <Col lg='12' style={{backgroundColor: "#eff2f7", padding: "30px", marginTop: "0"}}>
                            <CheckoutForm info={userAuth?.data?.addresses[0]}/>
                        </Col>
                        <div className='form-check p-0 custome-form-check' style={{marginTop: "30px"}}>
                            <input className='checkbox_animated check-it'
                                   type='checkbox' style={{top: "-10px"}}
                                   onClick={() => setCheckBox(!checkBox)}
                            />
                            <h3 className='mb-3' style={{paddingLeft: "0"}}>Add a different shipping address</h3>
                        </div>
                        {
                            checkBox ?
                                <Col lg='12' style={{backgroundColor: "#eff2f7", padding: "30px", marginTop: "0"}}>
                                    <CheckoutForm/>
                                </Col> : ""
                        }
                    </Col>
                    <SideBarCartBox/>
                    <Col lg='8'>

                        <h2 className='mb-3' style={{paddingLeft: "0"}}>Payment Method</h2>
                        <Col lg='12' style={{backgroundColor: "#eff2f7", padding: "30px", marginTop: "0"}}>
                            <PaymantMode/>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SectionCheckout;
