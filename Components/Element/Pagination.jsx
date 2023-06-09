import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {
    selectFilterBrands,
    selectFilterCategory,
    selectPriceRange,
    setShopProducts
} from "../../ReduxToolkit/Slices/ShopProductsSlice";
import {useRouter} from "next/router";

const PaginationComp = ({productData, addClass}) => {

    let [selectPage, setSelectPage] = useState(1);
    let dispatch = useDispatch();
    let filterBrands = useSelector(selectFilterBrands);
    let filterCategory = useSelector(selectFilterCategory);
    let priceRange = useSelector(selectPriceRange);
    const router = useRouter();

    // console.log(router,"ro")
    function pushStateData(el) {
        window.history.pushState(el, router?.query?.id, `${router?.query?.id}?${el}`);
    }

    let [r, setR] = useState(false)

    useEffect(() => {
        // console.log(`${productData.path}?json=true&per_page=12&page=${router?.query?.page}${typeof router?.query["brands[]"] === 'string' ? `&brands%5B%5D=${Number(router?.query["brands[]"])}` : router?.query["brands[]"] ? router?.query?.["brands[]"].map(el => `&brands%5B%5D=${Number(el)}`).join('') : ""}${router?.query?.min_price ? `&min_price=${Number(router?.query?.min_price)}` : ""}${router?.query?.max_price ? `&max_price=${Number(router?.query?.max_price)}` : ""}${typeof router?.query["attributes[]"] === 'string' ? `&attributes%5B%5D=${Number(router?.query["attributes[]"])}` : router?.query["attributes[]"] ? router?.query?.["attributes[]"].map(el => `&attributes%5B%5D=${Number(el)}`).join('') : ""}`)
        if (Number(router?.query?.page) > 1 || Object.keys(router?.query).length > 3) {
            fetch(`${productData.path}?json=true&per_page=12&page=${router?.query?.page}${typeof router?.query["brands[]"] === 'string' ? `&brands%5B%5D=${Number(router?.query["brands[]"])}` : router?.query["brands[]"] ? router?.query?.["brands[]"].map(el => `&brands%5B%5D=${Number(el)}`).join('') : ""}${router?.query?.min_price ? `&min_price=${Number(router?.query?.min_price)}` : ""}${router?.query?.max_price ? `&max_price=${Number(router?.query?.max_price)}` : ""}${typeof router?.query["attributes[]"] === 'string' ? `&attributes%5B%5D=${Number(router?.query["attributes[]"])}` : router?.query["attributes[]"] ? router?.query?.["attributes[]"].map(el => `&attributes%5B%5D=${Number(el)}`).join('') : ""}`)
                .then(res => res.json().then(res => {
                        setSelectPage(res.products.current_page)
                        dispatch(setShopProducts(res.products))
                    }
                ));
        }
    }, []);

    useEffect(() => {
        fetch(`${productData?.path}?json=true&per_page=12&page=${selectPage}${filterBrands?.join('')}${priceRange?.join('')}${filterCategory?.join('')}`)
            .then(res => res.json().then(res => {
                console.log(priceRange,"price")
                    if (res?.products?.last_page < selectPage) {
                        setSelectPage(res?.products?.last_page)
                        fetch(`${productData.path}?json=true&per_page=12&page=${res.products.last_page}${filterBrands?.join('')}${priceRange?.join('')}${filterCategory?.join('')}`)
                            .then(res => res.json().then(res => {
                                    dispatch(setShopProducts(res.products))
                                    pushStateData(`per_page=12&page=${res.products.last_page}${filterBrands?.join('')}${priceRange?.join('')}${filterCategory?.join('')}`)
                                }
                            ));
                    }
                    if (r) {

                        dispatch(setShopProducts(res.products))
                        pushStateData(`per_page=12&page=${selectPage}${filterBrands?.join('')}${priceRange?.join('')}${filterCategory?.join('')}`)
                    }
                    setR(true)

                }
            ));
    }, [filterBrands, filterCategory, priceRange])

    let paginate = (e) => {
        fetch(`${productData.path}?json=true&per_page=12&page=${e.selected + 1}`)
            .then(res => res.json().then(res => {
                    setSelectPage(e.selected + 1)
                    window.scrollTo(0, 100)
                    if (filterBrands.length !== 0 || priceRange.length !== 0) {
                        fetch(`${productData.path}?json=true&per_page=12&page=${e.selected + 1}${filterBrands?.join('')}${priceRange?.join('')}${filterCategory?.join('')}`)
                            .then(res => res.json().then(res => {
                                    dispatch(setShopProducts(res.products))
                                    pushStateData(`per_page=12&page=${e.selected + 1}${filterBrands?.join('')}${priceRange?.join('')}${filterCategory?.join('')}`)
                                }
                            ));
                    } else {
                        dispatch(setShopProducts(res?.products))
                        pushStateData(`per_page=12&page=${e.selected + 1}`)
                    }

                }
            ));

    }




    return (
        <nav className={`page-section ${addClass ? addClass : ''}`}>
            <ReactPaginate
                pageCount={productData?.last_page}
                forcePage={selectPage - 1}
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
