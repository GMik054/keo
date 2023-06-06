import Link from 'next/link';
import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import BoxAnimationSection from './BoxAnimationSection';
import ShoesCategory from "../../ShoesDemo/ShoesCategory";
import CategoryCard from "../../ShoesDemo/ShoesCategory/CategoryCard";

const BreadCrumb = (props) => {
    const {parent = '', title = ''} = props;
    const ShoesFilter = props?.categoryBanner?.filter((el) => el.type === 'shoes');
    return (
        <section
            // className='breadcrumb-section section-b-space'
            className="section-b-space"
            style={{padding: "30px 0", backgroundColor: "white"}}
        >
            {/*<BoxAnimationSection />*/}
            <Container>
                <Row>
                    <Col xs='12' style={{margin: ShoesFilter ? "0 0 30px" : "0"}}>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>
                                    <Link href={'/'}>
                                        <i className='fas fa-home'></i>
                                    </Link>
                                </li>
                                <li className='breadcrumb-item active' aria-current='page'>
                                    {parent}
                                </li>
                            </ol>
                        </nav>
                        {ShoesFilter ? <h2>{title}</h2> : ""}
                    </Col>
                    {
                        ShoesFilter ?
                            <CategoryCard ShoesFilter={ShoesFilter}/> : ""
                    }

                </Row>
            </Container>

        </section>
    );
};

export default BreadCrumb;
