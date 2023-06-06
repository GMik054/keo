import React, {useEffect, useState} from 'react';
import {Col, Container, Input, Row} from "reactstrap";
import PaginationComp from "../../Element/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../../Service/FetchApi";

const MyAccountInquirySection = () => {
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
        <Container>
            <Row>
                <h2 style={{marginBottom: "26px"}}>Account Inquiry</h2>
                <Col lg="12">
                    <Row>
                        <Col lg="3">
                            <div className="inquiry-section-info" style={{backgroundColor: "#CACDFE"}}>
                                <h5>CREDIT LIMIT</h5>
                                <div>
                                    <h5>$100.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="inquiry-section-info" style={{backgroundColor: "#A3E7ED"}}>
                                <h5>BALANCE DUE</h5>
                                <div>
                                    <h5>$18.62</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="inquiry-section-info" style={{backgroundColor: "#8FED94"}}>
                                <h5>AVAILABLE CREDIT</h5>
                                <div>
                                    <h5>$-1043.80</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="inquiry-section-info" style={{backgroundColor: "#FFD84F"}}>
                                <h5>CURRENT</h5>
                                <div>
                                    <h5>$18.62 </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg="12" style={{margin: "16px 0", display: "grid", gridGap: "24px"}}>
                    <Row>
                        <Col lg="6">
                            <div style={{padding: "8px 0", borderBottom: "1px solid #CED4DA", width: "100%"}}>
                                <h3 style={{color: "var(--theme-color)"}}>PAST DUE</h3></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Row style={{gridGap: "10px"}}>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>Month To Date</p>
                                        <p style={{fontWeight: "500"}}>$17.00</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>Year To Date</p>
                                        <p style={{fontWeight: "500"}}>$17.00</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>6 Months Avarage</p>
                                        <p style={{fontWeight: "500"}}>$17.00</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>6 Months High</p>
                                        <p style={{fontWeight: "500"}}>$17.00</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>Payment Days</p>
                                        <p style={{fontWeight: "500"}}>$17.00</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg="6">

                            <Row style={{gridGap: "10px"}}>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>Orders</p>
                                        <p style={{fontWeight: "500"}}>$100.00</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>Last Sale Date</p>
                                        <p style={{fontWeight: "500"}}>$1125.18</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>91-120 Days</p>
                                        <p style={{fontWeight: "500"}}>Apr 14, 23</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>Deposits</p>
                                        <p style={{fontWeight: "500"}}>$0</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>Last Payment Date</p>
                                        <p style={{fontWeight: "500"}}>Apr 22, 23</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Row style={{gridGap: "10px"}}>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>31-60 Days</p>
                                        <p style={{fontWeight: "500"}}>$100.00</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>61-90 Days</p>
                                        <p style={{fontWeight: "500"}}>$100.00</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg="6">

                            <Row style={{gridGap: "10px"}}>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>31-60 Days</p>
                                        <p style={{fontWeight: "500"}}>$100.00</p>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div className="past-due">
                                        <p>61-90 Days</p>
                                        <p style={{fontWeight: "500"}}>$100.00</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg="12">
                    <Row>
                        <Col lg="3">
                            <div className="search-div">
                                <i className='fas fa-search search-icon fa-lg fa-light '/>
                                <input type="text" className="form-control checkout-form search-input"
                                       placeholder="Enter Number Here..." name="search"/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="table-responsive">
                        <Col lg="12" className="sc-dmctIk WQNxq">

                            <table style={{width: "100%", borderCollapse: "separate", borderSpacing: "0 30px"}}>
                                <tbody>
                                <tr className=" invoice-stat">
                                    <th>
                                        <h4>Invoice #</h4>
                                    </th>
                                    <th><h4>Transaction Date</h4></th>
                                    <th><h4>Transaction Amount</h4></th>
                                    <th><h4>Payment Date</h4></th>
                                    <th><h4>Payment Date</h4></th>
                                    <th><h4>Balance</h4></th>
                                </tr>
                                <tr className=" invoice-info">
                                    <td><h4>S100886077</h4></td>
                                    <td><h4>Apr 14, 23</h4></td>
                                    <td><h4>$18.62</h4></td>
                                    <td><h4>-</h4></td>
                                    <td><h4>$0.00</h4></td>
                                    <td><h4>$18.62</h4></td>
                                </tr>
                                <tr className=" invoice-info">
                                    <td><h4>S100885785</h4></td>
                                    <td><h4>Apr 02, 23</h4></td>
                                    <td><h4>$18.62</h4></td>
                                    <td><h4>-</h4></td>
                                    <td><h4>$7.00</h4></td>
                                    <td><h4>$218.62</h4></td>
                                </tr>
                                <tr className=" invoice-info">
                                    <td><h4>S100886077</h4></td>
                                    <td><h4>Apr 14, 23</h4></td>
                                    <td><h4>$18.62</h4></td>
                                    <td><h4>-</h4></td>
                                    <td><h4>$0.00</h4></td>
                                    <td><h4>$18.62</h4></td>
                                </tr>
                                <tr className=" invoice-info">
                                    <td><h4>S100885785</h4></td>
                                    <td><h4>Apr 02, 23</h4></td>
                                    <td><h4>$18.62</h4></td>
                                    <td><h4>-</h4></td>
                                    <td><h4>$7.00</h4></td>
                                    <td><h4>$218.62</h4></td>
                                </tr>
                                <tr className=" invoice-info">
                                    <td><h4>S100886077</h4></td>
                                    <td><h4>Apr 14, 23</h4></td>
                                    <td><h4>$18.62</h4></td>
                                    <td><h4>-</h4></td>
                                    <td><h4>$0.00</h4></td>
                                    <td><h4>$18.62</h4></td>
                                </tr>
                                <tr className=" invoice-info">
                                    <td><h4>S100885785</h4></td>
                                    <td><h4>Apr 02, 23</h4></td>
                                    <td><h4>$18.62</h4></td>
                                    <td><h4>-</h4></td>
                                    <td><h4>$7.00</h4></td>
                                    <td><h4>$218.62</h4></td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <PaginationComp
                                dataPerPage={dataPerPage} StoreProductLength={StoreBlog?.length}
                                currentPage={currentPage} paginate={paginate}
                            />
                        </Col>

                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default MyAccountInquirySection;