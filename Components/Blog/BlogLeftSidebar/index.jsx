import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Container, Row} from 'reactstrap';
import {getAllUsers} from '../../../Service/FetchApi';
import PaginationComp from '../../Element/Pagination';
import LeftSidebar from '../BlogDetails/LeftSidebar';
import ProductCard from './ProductCard';
import ShopBannerDetails from "../../Shop/ShopCanvasFilter/ShopBannerDetails";
import Img from "../../Element/Images";
import {CommonPath, ShopNow} from "../../Constant";
import {Btn} from "../../AbstractElements";

const BlogLeftSidebar = () => {
    const dispatch = useDispatch();
    const types = 'GETBLOGDATA';
    const {Blogdatanew} = useSelector((state) => state.BlogReducer);
    useEffect(() => {
        !Blogdatanew && dispatch(getAllUsers('blog', types));
    }, []);
    const BlogDataFilter = Blogdatanew && Blogdatanew.filter((el) => el.type === 'blogcard');
    const StoreBlog = BlogDataFilter[0]?.blogs;
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(8);
    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    const currentData = StoreBlog && StoreBlog?.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber < currentData?.length) {
            setCurrentPage(pageNumber);
        }
    };
    return (
        <section id='portfolio' className='left-sidebar-section masonary-blog-section section-b-space'
                 style={{paddingTop: "0", backgroundColor: "white"}}>
            <Container>
                <Row className='g-4'>
                    <Col lg="12">
                        <div className='banner-deatils'>
                            <div className='banner-image' style={{
                                minHeight: "380px",
                                backgroundImage: "url(/assets/images/fashion/banner.jpg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                display: "block"
                            }}>
                                <Fragment>
                                    <div className='category-banner-button' style={{
                                        position: "absolute",
                                        bottom: "6%",
                                        right: "2.5%",
                                    }}>
                                        <Btn
                                            attrBtn={{
                                                className: 'btn-solid-default ',
                                                onClick: () => router.push('/shop/shop_left_sidebar'),
                                            }}>
                                            {ShopNow}
                                        </Btn>
                                    </div>
                                </Fragment>
                            </div>
                        </div>
                    </Col>
                    <Col lg='9' md='7' className='order-md-1 ratio3_2'>
                        <ProductCard currentData={currentData}/>
                        <Col xs='12'>
                            <PaginationComp dataPerPage={dataPerPage} StoreProductLength={StoreBlog?.length}
                                            currentPage={currentPage} paginate={paginate}/>
                        </Col>
                    </Col>
                    <LeftSidebar/>
                </Row>
            </Container>
        </section>
    );
};

export default BlogLeftSidebar;
