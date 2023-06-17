import React from "react";
import {Col, Container, Row} from "reactstrap";
import {JustForYou, NewArrival} from "../../Constant";
import SectionHeader from "../../Element/SectionHeader";
import VRSliders from "./VRSlider";

const ElectronicVR = ({productData, title, paddingBottom, padding}) => {
    // const FilterVrProduct = productData.filter((el) => el.type === "electronic")
    return (
        <section className="ratio_asos">
            <Container fluid={true}>
                <Row>
                    <Col>
                        <SectionHeader title={title ? title : NewArrival} subTitle={title ? title : NewArrival}/>
                        <VRSliders FilterVrProduct={productData} padding={padding} paddingBottomm={paddingBottom}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ElectronicVR;