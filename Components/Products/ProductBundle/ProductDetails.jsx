import React from 'react';
import {useState} from 'react';
import {BestSeller, Color, OFF} from '../../Constant';
import GifComponents from '../Product4ImageContain/GifComponents';
import ProductActions from '../Product4ImageContain/ProductActions';
import ProductProgressBar from '../Product4ImageContain/ProductProgressBar';
import ProductSizeChart from '../Product4ImageContain/ProductSizeChart';
import ShareSocial from '../Product4ImageContain/ShareSocial';
import BundleCartDetails from './BundleCartDetails';
import Link from "next/link";
import DynamicRating from "../../Element/DynamicRating";

const ProductDetails = ({bundles, singleProduct}) => {
    const [active, setActive] = useState();

    // console.log(singleProduct,"singleProduct")

    return (
        <div className='cloth-details-size'>
            {/*<GifComponents />*/}

            <div className='details-image-concept'>
                <h2>{singleProduct?.name}</h2>
            </div>
            <div style={{display:"flex"}}>
            {/*<DynamicRating data={singleProduct[0]?.ratingStars} customeclass={"mb-3"}/>*/}
            <span style={{marginLeft:"2px"}}>({singleProduct.reviews_count} reviews)</span>
            </div>

            {/*<div className='label-section'>*/}
            {/*    <span className='badge badge-grey-color'>{BestSeller}</span>*/}
            {/*    <span className='la bel-text'>in {singleProduct && singleProduct[0]?.type}</span>*/}
            {/*</div>*/}

            {/*  <h3 className='price-detail'>*/}
            {/*      ${singleProduct && singleProduct[0]?.price}*/}
            {/*      <del>${singleProduct && singleProduct[0]?.mrp}.00</del>*/}
            {/*      {singleProduct && singleProduct[0]?.discount !== 0 && (*/}
            {/*          <span>*/}
            {/*  {singleProduct && singleProduct[0]?.discount}% {OFF}*/}
            {/*</span>*/}
            {/*      )}*/}
            {/*  </h3>*/}
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "16px",
                marginBottom: "16px",
                borderBottom: "2px solid  #F1CBCC"
            }}>
                <span><span className="font-light ml-1">By: <Link href="category/samsung">Samsung</Link></span></span>
                <span><span className="font-light ml-1">Model</span> <span
                    className="font-bold ml-1"># {singleProduct.sku}</span></span>
                <span><span className="font-light ml-1">Part Number</span> <span
                    className="font-bold ml-1"># {singleProduct.eclipse_number}</span></span>

            </div>

            <div style={{
                width: "100%",
                display: "block",
                paddingBottom: "16px",
                marginBottom: "30px",
                borderBottom: "2px solid  #F1CBCC"
            }}>
                <div><span className="font-light ml-1">Weight</span> <span className="font-bold ml-1">: 43 lbs</span>
                </div>
                <div><span className="font-light ml-1">Dimensions</span> <span className="font-bold ml-1">: 6.2 × 54.6 × 33.2 in</span>
                </div>
                <div><span className="font-light ml-1">Size</span> <span className="font-bold ml-1">: 55''</span></div>
                <div><span className="font-light ml-1">Type</span> <span className="font-bold ml-1">: UHD</span></div>
            </div>
            <table style={{width: "100%"}} className="regions-table">
                <tbody>
                <tr>
                    <th><i className='fas fa-check' style={{color: "#8CC643", marginRight: "6px"}}></i>Stock
                        Availability (5)
                    </th>
                    <th style={{textAlign: "center"}}>Show Full List</th>
                </tr>
                <tr>
                    <td>Las Vegas</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Los Angeles</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>N. Hollywood</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Los Angeles</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>N. Hollywood</td>
                    <td>0</td>
                </tr>
                </tbody>
            </table>
            {/*<div className='color-selector'>*/}
            {/*  <h5>{Color} :</h5>*/}
            {/*  <ul className='image-section'>*/}
            {/*    <li className=''>*/}
            {/*      <a href='#javascript' onClick={() => setActive(1)} style={{ background: 'red' }}>*/}
            {/*        {active === 1 && <i className='fas fa-check'></i>}*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href='#javascript' onClick={() => setActive(2)} style={{ background: 'blue' }}>*/}
            {/*        {active === 2 && <i className='fas fa-check'></i>}*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    {singleProduct &&*/}
            {/*      singleProduct?.colors?.map((elem, i) => (*/}
            {/*        <li key={i}>*/}
            {/*          <a style={{ background: elem }}>*/}
            {/*            <i className='fas fa-check'></i>*/}
            {/*          </a>*/}
            {/*        </li>*/}
            {/*      ))}*/}
            {/*  </ul>*/}
            {/*</div>*/}
            {/*<ProductSizeChart/>*/}
            {/*<ProductActions singleProduct={singleProduct}/>*/}
            {/*<ProductProgressBar/>*/}
            {/*<ShareSocial/>*/}
            {/*{bundles && <BundleCartDetails/>}*/}
        </div>
    );
};

export default ProductDetails;
