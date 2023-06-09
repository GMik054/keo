import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AccordionBody, AccordionHeader, AccordionItem} from 'reactstrap';
import {Color} from '../../Constant';

const ColorFilter = ({productData}) => {
    // const dispatch = useDispatch();
    // const {color} = useSelector((state) => state.ProductFilter);
    const [colorArray, setColorArray] = useState([]);
    // useEffect(() => {
        // productData?.map((el) => setColorArray((prev) => Array.from(new Set([...prev, ...el?.colors]))));
    // }, [productData]);

    const addColor = (elem) => {
        if (colorArray.includes(elem)) {
            setColorArray((prev) => prev.filter((color) => color !== elem));
        } else {
            setColorArray((prev) => [...prev, elem]);
        }
    };
    return (
        <AccordionItem className='category-color'>
            <AccordionHeader targetId='2'>{Color}</AccordionHeader>
            <div id='collapseThree' className='accordion-collapse collapse show' aria-labelledby='headingThree'
                 data-bs-parent='#accordionExample'>
                <AccordionBody accordionId='2'>
                    <ul className='category-list'>
                        {productData?.attributes?.map((elem, i) => {
                                // console.log(elem,"elem")
                                return (

                                    <li
                                        className={`${colorArray?.includes(elem) ? 'active' : ''}`}
                                        key={i}>
                                        <a style={{background: elem.color}}
                                            // onClick={() => dispatch({type: 'COLORFILTER', payload: elem})}
                                           onClick={() => addColor(elem)}
                                        >
                                            <i className='fas fa-check'></i>
                                        </a>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </AccordionBody>
            </div>
        </AccordionItem>
    );
};

export default ColorFilter;
