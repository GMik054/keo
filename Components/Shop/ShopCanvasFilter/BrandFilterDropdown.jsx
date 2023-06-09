import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from 'reactstrap';
// import { Brand } from '../../Constant';
import { setFilterBrands } from "../../../ReduxToolkit/Slices/ShopProductsSlice";

const BrandFilterDropdown = ({ productData ,title}) => {
    const [brandsArray, setBrandsArray] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFilterBrands(brandsArray.map(el => `&brands%5B%5D=${el.id}`)));
    }, [brandsArray]);

    useEffect(() => {
        if (typeof router?.query["brands[]"] === 'string') {
            addBrand({ id: Number(router?.query["brands[]"]) });
        } else if (router?.query?.["brands[]"]) {
            router?.query["brands[]"].map(el => {
                addBrand({ id: Number(el) });
            });
        }
    }, []);

    const addBrand = (elem) => {
        if (brandsArray.some((brand) => brand.id === elem.id)) {
            setBrandsArray((prev) => prev.filter((brand) => brand.id !== elem.id));
        } else {
            setBrandsArray((prev) => [...prev, elem]);
        }
    };

    return (
        <AccordionItem className='category-rating'>
            <AccordionHeader targetId='1'>{title}</AccordionHeader>
            <AccordionBody accordionId='1' className='category-scroll'>
                <ul className='category-list'>
                    {productData &&
                        productData.map((elem, i) => {
                            const isChecked = brandsArray?.some((brand) => brand?.id === elem?.id);
                            return (
                                <Fragment key={i}>
                                    {elem !== 'none' && (
                                        <li>
                                            <div className='form-check custome-form-check'>
                                                <Input
                                                    className='checkbox_animated check-it'
                                                    type='checkbox'
                                                    checked={isChecked}
                                                    onChange={() => addBrand(elem)}
                                                />
                                                <Label className='form-check-label'>
                                                    {elem.name}
                                                </Label>
                                                {/*<p className='font-light'>*/}
                                                {/*    ({elem?.products_count})*/}
                                                {/*</p>*/}
                                            </div>
                                        </li>
                                    )}
                                </Fragment>
                            );
                        })}
                </ul>
            </AccordionBody>
        </AccordionItem>
    );
};

export default BrandFilterDropdown;