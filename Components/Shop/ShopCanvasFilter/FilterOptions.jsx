import React, {useEffect, useState} from 'react';
import {Accordion, UncontrolledAccordion} from 'reactstrap';
import BrandFilterDropdown from './BrandFilterDropdown';
import ColorFilter from './ColorFilter';
import PriceRange from './PriceRange';
import CategoryFilter from './CategoryFilter';
import DiscountRangeFilter from './DiscountRangeFilter';
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setFilterBrands, setFilterCategory} from "../../../ReduxToolkit/Slices/ShopProductsSlice";

const FilterOptions = ({productData}) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen('1');
        } else {
            setOpen(id);
        }
    };

    const [categoryArray, setCategoryArray] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFilterCategory(categoryArray.map(el => `&attributes%5B%5D=${el.id}`)));
    }, [categoryArray]);

    useEffect(() => {
        if (typeof router?.query["attributes[]"] === 'string') {
            addCategory({id: Number(router?.query["attributes[]"])});
        } else if (router?.query?.["attributes[]"]) {
            router?.query["attributes[]"].map(el => {
                addCategory({id: Number(el)});
            });
        }
    }, []);

    const addCategory = (elem) => {
        // console.log(elem,"addCategory")
        if (categoryArray.some((brand) => brand.id === elem.id)) {
            setCategoryArray((prev) => prev.filter((brand) => brand.id !== elem.id));
        } else {
            setCategoryArray((prev) => [...prev, elem]);
        }
    };
    const defaultOpenSections = router?.query["attributes[]"] ? typeof router?.query["attributes[]"] === 'string' ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : router?.query?.["attributes[]"].length !== 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : ['1', '2', '3', '4'] : ['1', '2', '3', '4'];

    // console.log(categoryArray.length !== 0, "categoryArray")
    return (
        <Accordion open={open} className='category-name' toggle={toggle}>
            <UncontrolledAccordion
                defaultOpen={defaultOpenSections}
                stayOpen>
                <BrandFilterDropdown productData={productData?.brands}/>
                <ColorFilter productData={productData?.attributes.filter(el => el.title === "Color")[0]}
                             categoryArray={categoryArray} addCategory={addCategory}
                             setCategoryArray={setCategoryArray}/>
                <PriceRange productData={productData}/>
                {
                    productData?.attributes.filter(el => el.title !== "Color").map((el, i) => {
                        return (
                            <CategoryFilter productData={el} index={i} key={i} addCategory={addCategory}
                                            categoryArray={categoryArray} setCategoryArray={setCategoryArray}/>
                        )

                    })
                }
                {/*<DiscountRangeFilter productData={productData?.attributes}/>*/}
            </UncontrolledAccordion>
        </Accordion>
    );
};

export default FilterOptions;
