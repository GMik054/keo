import React, {useEffect, useState} from "react";
import {getTrackBackground, Range} from "react-range";
import {useDispatch} from "react-redux";
import {AccordionBody, AccordionHeader, AccordionItem} from "reactstrap";
import {Prices} from "../../Constant";
import {setPriceRange} from "../../../ReduxToolkit/Slices/ShopProductsSlice";
import {useRouter} from "next/router";

const PriceRange = ({productData}) => {
    const [values1, setValues1] = useState([Math.floor(productData.min_price), productData.max_price]);
    const dispatch = useDispatch();
    const router = useRouter();

    const MIN = Math.floor(productData.min_price);
    const MAX = productData.max_price;

    // console.log(router)

    useEffect(() => {
        if (router?.query?.min_price) {
            setValues1([Number(router?.query?.min_price), Number(router?.query?.max_price)]);
            dispatch(setPriceRange([`&min_price=${Number(router?.query?.min_price)}`, `&max_price=${Number(router?.query?.max_price)}`]))
        }
    }, []);

    const handleChange = (val) => {
        setValues1(val);
        dispatch(setPriceRange([`&min_price=${val[0]}`, `&max_price=${val[1]}`]))
    };
    return (
        <AccordionItem className="category-price">
            <AccordionHeader targetId="3">{Prices}</AccordionHeader>
            <AccordionBody accordionId="3">
                <div
                    className="range-category"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        margin: "1em",
                    }}
                >
                    <Range
                        values={values1}
                        step={1}
                        min={MIN}
                        max={MAX + 10}
                        onChange={(values) => handleChange(values)}
                        renderTrack={({props, children}) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "100px",
                                    display: "flex",
                                    width: "100%",
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                            values: values1,
                                            colors: ["#b62427", "#b62427", "#b62427"],
                                            min: MIN,
                                            max: MAX,
                                        }),
                                        alignSelf: "center",
                                    }}

                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({index, props, isDragged}) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "32px",
                                    width: "32px",
                                    borderRadius: "4px",
                                    backgroundColor: "#b62427",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6px #AAA",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "-35px",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                                        padding: "4px",
                                        borderRadius: "4px",
                                        backgroundColor: "#b62427",
                                    }}
                                >
                                    {values1[index].toFixed(1)}
                                </div>
                                <div
                                    style={{
                                        height: "16px",
                                        width: "5px",
                                        backgroundColor: isDragged ? "#b62427" : "#CCC",
                                    }}
                                />
                            </div>
                        )}
                    />
                </div>
            </AccordionBody>
        </AccordionItem>
    );
};

export default PriceRange;
