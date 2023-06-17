import React from 'react';
import {Container, Row} from 'reactstrap';
import DetainTabSection from '../Common/DetailTabsection';
import {useRouter} from "next/router";
import VRSliders from "../../ElectronicDemo/ElectronicVR/VRSlider";
import RightSideContain from "../ProductLeftSidebarContain/RightsideContain";
import LeftSideContain from "../ProductLeftSidebarContain/LeftsideContain";

const ProductRightSidebarContain = ({singleProduct}) => {

    return (

        <section style={{padding: "0"}}>
            <Container>
                <Row className='gx-4 gy-5'>
                    <RightSideContain singleProduct={singleProduct}/>
                    <LeftSideContain singleProduct={singleProduct?.product}/>
                    <DetainTabSection/>
                </Row>
            </Container>
        </section>
    );
};

export default ProductRightSidebarContain;
