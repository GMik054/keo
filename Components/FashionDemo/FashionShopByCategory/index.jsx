import React from 'react';
import {Container, Row} from "reactstrap";
import SectionHeader from "../../Element/SectionHeader";
import {ShopByCategory, TopBrands} from "../../Constant";
import PopularCard from "../../FurnitureDemo/FurnitureSlider/PopularCards";
import FashionPopularCard from "./FashionPopularCards";

const Index = ({popularCard}) => {
    // console.log(popularCard)
    return (
        <section className="product-slider overflow-hidden" >
            <div style={{backgroundColor:"#eff2f7", padding:"80px 0 52px"}}>
                <Container>
                    <SectionHeader title={ShopByCategory} subTitle={ShopByCategory}/>
                    <Row className="">
                        <FashionPopularCard popularCard={popularCard}/>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Index;