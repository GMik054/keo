import React, {useEffect, useState} from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import ReactPaginate from "react-paginate";
import {APICallUrl} from "../Constant";
import {setAuth, setLoginToken, setUser} from "../../ReduxToolkit/Slices/LoginSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    selectFilterBrands, selectPriceRange, selectPriceRangeMax, selectPriceRangeMin, selectShopProducts,
    setShopCategory,
    setShopFilters,
    setShopProducts
} from "../../ReduxToolkit/Slices/ShopProductsSlice";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";

const PaginationComp = ({productData, addClass}) => {

    let [selectPage, setSelectPage] = useState(1);
    let dispatch = useDispatch();
    let filterBrands = useSelector(selectFilterBrands);
    let priceRange = useSelector(selectPriceRange);
    const router = useRouter();

    // console.log(router,"ro")
    function pushStateData(el) {
        window.history.pushState(el, router?.query?.id, `${router?.query?.id}?${el}`);
    }

    let [r, setR] = useState(false)

    useEffect(() => {
        // console.log(`${productData.path}?json=true&per_page=12&page=${router?.query?.page}${typeof router?.query["brands[]"] === 'string' ? `&brands%5B%5D=${Number(router?.query["brands[]"])}` : router?.query?.["brands[]"].map(el => `&brands%5B%5D=${Number(el)}`).join('')}${router?.query?.min_price && `&min_price=${Number(router?.query?.min_price)}`}${router?.query?.max_price && `&max_price=${Number(router?.query?.max_price)}`}`)
        if (Number(router?.query?.page) > 1 || Object.keys(router?.query).length > 3) {
            fetch(`${productData.path}?json=true&per_page=12&page=${router?.query?.page}${typeof router?.query["brands[]"] === 'string' ? `&brands%5B%5D=${Number(router?.query["brands[]"])}` : router?.query?.["brands[]"].map(el => `&brands%5B%5D=${Number(el)}`).join('')}${router?.query?.min_price && `&min_price=${Number(router?.query?.min_price)}`}${router?.query?.max_price && `&max_price=${Number(router?.query?.max_price)}`}`)
                .then(res => res.json().then(res => {
                        setSelectPage(res.products.current_page)
                        dispatch(setShopProducts(res.products))
                    }
                ));
        }
    }, []);

    useEffect(() => {
        fetch(`${productData?.path}?json=true&per_page=12&page=${selectPage}${filterBrands?.join('')}${priceRange?.join('')}`)
            .then(res => res.json().then(res => {
                    if (res?.products?.last_page < selectPage) {
                        setSelectPage(res?.products?.last_page)
                        fetch(`${productData.path}?json=true&per_page=12&page=${res.products.last_page}${filterBrands?.join('')}${priceRange?.join('')}`)
                            .then(res => res.json().then(res => {
                                    dispatch(setShopProducts(res.products))
                                    pushStateData(`per_page=12&page=${res.products.last_page}${filterBrands?.join('')}${priceRange?.join('')}`)
                                }
                            ));
                    }
                    if (r) {
                        dispatch(setShopProducts(res.products))
                        pushStateData(`per_page=12&page=${selectPage}${filterBrands?.join('')}${priceRange?.join('')}`)
                    }
                    setR(true)

                }
            ));
    }, [filterBrands, priceRange])


    let paginate = (e) => {
        // console.log(e, "EEE")
        fetch(`${productData.path}?json=true&per_page=12&page=${e.selected + 1}`)
            .then(res => res.json().then(res => {
                    setSelectPage(e.selected + 1)
                    window.scrollTo(0, 100)
                    if (filterBrands.length !== 0 || priceRange.length !== 0) {
                        fetch(`${productData.path}?json=true&per_page=12&page=${e.selected + 1}${filterBrands?.join('')}${priceRange?.join('')}`)
                            .then(res => res.json().then(res => {
                                    // console.log(res.products, "res.pag")
                                    dispatch(setShopProducts(res.products))
                                    pushStateData(`per_page=12&page=${e.selected + 1}${filterBrands?.join('')}${priceRange?.join('')}`)

                                }
                            ));
                    } else {
                        dispatch(setShopProducts(res?.products))
                        pushStateData(`per_page=12&page=${e.selected + 1}`)
                    }

                }
            ));

    }


    // console.log(productData?.last_page, "eeee")
    // console.log(selectPage, "selectPage")


    return (
        <nav className={`page-section ${addClass ? addClass : ''}`}>
            <ReactPaginate
                pageCount={productData?.last_page}
                forcePage={selectPage - 1} // Set the initial selected page
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
                onPageChange={(e) => paginate(e)}
            />
        </nav>
    );
};

export default PaginationComp;
