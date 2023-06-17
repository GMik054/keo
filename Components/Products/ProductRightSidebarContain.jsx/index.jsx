import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DetainTabSection from '../Common/DetailTabsection';
// import LeftSideContain from '../ProductLeftSidebarContain/LeftSideContain';
import RightSideContain from '../ProductLeftSidebarContain/RightSideContain';
import {getAPIData} from "../../../Utils";
import {useRouter} from "next/router";
import ElectronicVR from "../../ElectronicDemo/ElectronicVR";
import SectionHeader from "../../Element/SectionHeader";
import {NewArrival} from "../../Constant";
import VRSliders from "../../ElectronicDemo/ElectronicVR/VRSlider";
import LeftSideContain from "../ProductLeftSidebarContain/LeftsideContain";

const ProductRightSidebarContain = ({singleProduct}) => {
    const router = useRouter();
    const {id} = router.query;
    // const [singleProduct, setSingleProduct] = useState([]);
    // const FilterVrProduct = productData.filter((el) => el.type === "electronic")

    // useEffect(() => {
    //     const types = ['product'];
    //     types.map((type) => {
    //         getAPIData(`${process.env.API_URL}${type}/${id ? id : 1}`).then((res) => {
    //             type === 'product' && setSingleProduct(res?.data);
    //         });
    //     });
    // }, [router]);
    // console.log(singleProduct?.product, "DDDDDDDDD")

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
