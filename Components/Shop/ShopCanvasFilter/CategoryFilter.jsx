import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AccordionBody, AccordionHeader, AccordionItem, Label} from 'reactstrap';
import {Category} from '../../Constant';

const CategoryFilter = ({productData, index}) => {
    // const [allCategory, setAllCategory] = useState(['All']);
    // const { category } = useSelector((state) => state.ProductFilter);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   productData?.map((el) => setAllCategory((prev) => Array.from(new Set([...prev, el?.type]))));
    // }, [productData]);
    // const handleChange = (event) => {
    //   dispatch({ type: 'CATEGORYFILTER', payload: { checked: event.target.checked, value: event.target.value } });
    // };
    return (
        <AccordionItem className='category-rating'>
            <AccordionHeader id={`headingOne ${index}`} targetId={(index + 5).toString()}>
                {productData?.title}
            </AccordionHeader>
            <AccordionBody accordionId={(index + 5).toString()} className='category-scroll'>
                <ul className='category-list'>
                    {productData &&
                        productData.attributes.map((elem, i) => {
                            return (
                                <li key={i}>
                                    <div className='form-check p-0 custome-form-check'>
                                        <input className='checkbox_animated check-it' type='checkbox'
                                            // id={elem} value={elem}
                                            // checked={category.includes(elem)} onChange={(e) => handleChange(e)}
                                        />
                                        <Label className='form-check-label'
                                            // htmlFor={elem}
                                        >
                                            {elem.title}
                                        </Label>
                                        {/*<p className='font-light'>(25)</p>*/}
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </AccordionBody>
        </AccordionItem>
    );
};

export default CategoryFilter;
