import React, {useEffect} from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import ReactPaginate from "react-paginate";
import {APICallUrl} from "../Constant";
import {setAuth, setLoginToken, setUser} from "../../ReduxToolkit/Slices/LoginSlice";

const PaginationComp = ({StoreProductLength, productData,dataPerPage, currentPage, addClass}) => {


    // const pageNumber = [];
    //
    // for (let i = 1; i <= StoreProductLength; i++) {
    //     pageNumber.push(i);
    // }
    console.log(productData)
useEffect(()=>{

})
    let paginate = (e) => {


        // console.log(e.nextSelectedPage + 1)
        fetch(`${productData?.path}?page=${e?.nextSelectedPage + 1}&json=true`, {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json;charset=UTF-8"
            },

        }).then(res => res.json().then(res => {
                console.log(res,"res")
            }
        ));
    }
    return (
        <nav className={`page-section ${addClass ? addClass : ''}`}>
            {/*<Pagination>*/}
            {/*    <PaginationItem onClick={() => paginate(currentPage - 1)}>*/}
            {/*        <PaginationLink>*/}
            {/*<span aria-hidden='true'>*/}
            {/*  <i className='fas fa-chevron-left'></i>*/}
            {/*</span>*/}
            {/*        </PaginationLink>*/}
            {/*    </PaginationItem>*/}
            {/*    {pageNumber.map((number, i) => {*/}
            {/*        return (*/}
            {/*            <PaginationItem className={`${currentPage === number ? 'active' : ''}`}*/}
            {/*                            onClick={() => paginate(number)} key={i}>*/}
            {/*                <PaginationLink>{number}</PaginationLink>*/}
            {/*            </PaginationItem>*/}
            {/*        );*/}
            {/*    })}*/}

            {/*    <PaginationItem onClick={() => paginate(currentPage + 1)}>*/}
            {/*        <PaginationLink>*/}
            {/*<span aria-hidden='true'>*/}
            {/*  <i className='fas fa-chevron-right'></i>*/}
            {/*</span>*/}
            {/*        </PaginationLink>*/}
            {/*    </PaginationItem>*/}
            {/*</Pagination>*/}

            <ReactPaginate
                pageCount={productData.last_page}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                className="pagination"
                pageClassName={`page-item `}
                pageLinkClassName="page-link"
                // onPageChange={handlePageClick}
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageRangeDisplayed={3}
                renderOnZeroPageCount={null}
                disabledClassName="d-none"
                onClick={(e) => paginate(e)}
            />
        </nav>
    );
};

export default PaginationComp;
