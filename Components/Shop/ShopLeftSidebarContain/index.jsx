import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import useFilter from '../../../Utils/useFilter';
import PaginationComp from '../../Element/Pagination';
import AllProducts from '../ShopCanvasFilter/AllProducts';
import FilterButton from '../ShopCanvasFilter/FilterButton';
import FilterContent from '../ShopCanvasFilter/FilterContent';
import ShopBannerDetails from '../ShopCanvasFilter/ShopBannerDetails';
import SidebarFilter from './SidebarFilter';

const ShopLeftSidebarContain = ({ categoriesData, listGrid }) => {
  // const filterProduct = useFilter(productData);
  // const StoreProducts = filterProduct && filterProduct;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  // const currentData = StoreProducts && StoreProducts?.slice(indexOfFirstPost, indexOfLastPost);
  const  paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber < currentData?.length) {
      setCurrentPage(pageNumber);
    }
  };
  // console.log(categoriesData?.links?.length)
  return (
    <section className='section-b-space'>
      <Container>
        <Row>
          <SidebarFilter productData={categoriesData?.data} />
          <Col lg='9' xs='12' className='ratio_30'>
            <ShopBannerDetails />
            <FilterButton customClass={'filter-button mb-3'} />
            <FilterContent listGrid={listGrid} />
            <AllProducts currentData={categoriesData?.data} />
            <PaginationComp
                // dataPerPage={dataPerPage}
                //             StoreProductLength={categoriesData.last_page}
                            productData={categoriesData}
                            // currentPage={currentPage}
                            paginate={paginate} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopLeftSidebarContain;
