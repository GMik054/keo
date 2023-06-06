import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DetainTabSection from '../Common/DetailTabsection';
import LeftsideContain from '../ProductLeftSidebarContain/LeftsideContain';
import RightsideContain from '../ProductLeftSidebarContain/RightsideContain';
import {getAPIData} from "../../../Utils";
import {useRouter} from "next/router";
import ElectronicVR from "../../ElectronicDemo/ElectronicVR";
import SectionHeader from "../../Element/SectionHeader";
import {NewArrival} from "../../Constant";
import VRSliders from "../../ElectronicDemo/ElectronicVR/VRSlider";

const ProductRightSidebarContain = ({productData}) => {
    const router = useRouter();
    const {id} = router.query;
    const [singleProduct, setSingleProduct] = useState([]);
    const FilterVrProduct = productData.filter((el) => el.type === "electronic")

    useEffect(() => {
        const types = ['product'];
        types.map((type) => {
            getAPIData(`${process.env.API_URL}${type}/${id ? id : 1}`).then((res) => {
                type === 'product' && setSingleProduct(res?.data);
            });
        });
    }, [router]);
    return (
        <section style={{padding: "0"}}>
            <Container>
                <Row className='gx-4 gy-5'>
                    <RightsideContain singleProduct={singleProduct} id={id}/>
                    <LeftsideContain productData={productData} singleProduct={singleProduct}/>
                    <DetainTabSection/>
                </Row>
            </Container>
        </section>
    );
};

export default ProductRightSidebarContain;
