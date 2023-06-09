import React, {useState} from 'react';
import {Col, Container, Row} from 'reactstrap';
import useFilter from '../../../Utils/useFilter';
import PaginationComp from '../../Element/Pagination';
import AllProducts from '../ShopCanvasFilter/AllProducts';
import FilterButton from '../ShopCanvasFilter/FilterButton';
import FilterContent from '../ShopCanvasFilter/FilterContent';
import ShopBannerDetails from '../ShopCanvasFilter/ShopBannerDetails';
import SidebarFilter from './SidebarFilter';

const ShopLeftSidebarContain = ({shopProducts, shopFilters, listGrid}) => {


    return (
        <section className='section-b-space'>
            <Container>
                <Row>
                    <SidebarFilter productData={shopFilters}/>
                    <Col lg='9' xs='12' className='ratio_30'>
                        <ShopBannerDetails/>
                        <FilterButton customClass={'filter-button mb-3'}/>
                        <FilterContent listGrid={listGrid}/>
                        <AllProducts currentData={shopProducts?.data}/>
                        <PaginationComp productData={shopProducts}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ShopLeftSidebarContain;
