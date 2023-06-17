import React, {useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import {APICallUrl} from "../Constant";
import Link from "next/link";

const BrandsMainSection = ({brands}) => {
    let alphabet = ['#', '0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    function isNumber(n) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    }

    // console.log(brands)

    let [alpha, setAlpha] = useState("#")
    // console.log(alpha)

    return (
        <section className="section-b-space" style={{padding: "30px 0", backgroundColor: "white"}}>
            <Container>
                <Row style={{gap: "20px 0"}}>
                    <h2 style={{paddingBottom: "26px"}}>Shop By Brand</h2>
                    <div className="table-responsive">
                        <div className="sc-dmctIk WQNxq">
                            <div style={{display: "table", width: "100%", paddingBottom: "20px"}}>
                                <Col lg="12" style={{display: "flex", justifyContent: "space-between"}}>
                                    {
                                        alphabet.map((el, i) => {
                                            // console.log(el === "0-9")
                                            return (

                                                <div key={i}
                                                     style={{
                                                         display: "flex",
                                                         justifyContent: "center",
                                                         width: el === "0-9" ? "60px" : "46px",
                                                         borderRight: "1px solid #E2E5EA",
                                                         borderLeft: el === "#" ? "1px solid #E2E5EA" : "none"
                                                     }}>
                                                    <h2 onClick={() => setAlpha(el)}
                                                        style={{
                                                            color: alpha === el ? "var(--theme-color)" : "black",
                                                            cursor: "pointer"
                                                        }}>{el}</h2>
                                                </div>

                                            )
                                        })
                                    }


                                </Col>
                            </div>
                        </div>

                    </div>
                    {brands ? brands.map((el, i) => {
                        console.log(el, "ELL")
                        return (
                            alpha === "#" ? <Col xl="2" lg="3" md="6" xs="12" key={i}
                                                 style={{display: "flex", justifyContent: "center"}}>
                                <Link href={`${el.slugable.prefix}/${el.slugable.key}`}>
                                    <div style={{display: "flex", alignItems: "center", minHeight: "80px",}}>
                                        <img src={`${APICallUrl}/storage/${el.logo}`} alt={el.name} title={el.name}
                                             style={{maxWidth: "160px", maxHeight: "80px"}}/>
                                    </div>
                                </Link>
                            </Col> : alpha.toLowerCase() === el.name[0].toLowerCase() ?
                                <Col xl="2" lg="3" md="6" xs="12" key={i}
                                     style={{display: "flex", justifyContent: "center"}}>
                                    <Link href={`${el.slugable.prefix}/${el.slugable.key}`}>
                                        <div style={{display: "flex", alignItems: "center", minHeight: "80px",}}>
                                            <img src={`${APICallUrl}/storage/${el.logo}`} alt={el.name} title={el.name}
                                                 style={{maxWidth: "160px", maxHeight: "80px"}}/>
                                        </div>
                                    </Link>
                                </Col> : isNumber(alpha[0]) && isNumber(el.name[0]) ?
                                    <Col xl="2" lg="3" md="6" xs="12" key={i}
                                         style={{display: "flex", justifyContent: "center"}}>
                                        <Link href={`${el.slugable.prefix}/${el.slugable.key}`}>
                                            <div style={{display: "flex", alignItems: "center", minHeight: "80px",}}>
                                                <img src={`${APICallUrl}/storage/${el.logo}`} alt={el.name}
                                                     title={el.name}
                                                     style={{maxWidth: "160px", maxHeight: "80px"}}/>
                                            </div>
                                        </Link>
                                    </Col> : ""

                        )
                    }) : ""
                    }

                </Row>
            </Container>

        </section>
    );
}
    ;

    export default BrandsMainSection;