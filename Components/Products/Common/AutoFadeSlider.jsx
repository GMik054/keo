import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import Slider from 'react-slick';
import {AutoFadeSliderNavData, AutoFadeSliderPosterData} from '../../../Data/SliderSettingsData';
import {CommonPath} from '../../Constant';
import VegetableNav from "../../VegetablesDemo/VegetableHomeSlider/VegetableNav";
// import ReactImageMagnify from 'react-image-magnify';
// import ReactImageZoom from "react-image-zoom/src/react-image-zoom";
// import { ReactZoomPanPinch } from 'react-zoom-pan-pinch';
import {
    Magnifier,
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";

const AutoFadeSlider = ({VideoPlay, singleProduct}) => {
    // console.log(singleProduct)
    const [state, setState] = useState({nav1: null, nav2: null});
    const slider1 = useRef();
    const slider2 = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current,
        });
    }, []);
    const {nav1, nav2} = state;

    const [image, setImage] = useState(singleProduct?.map(e => e.images[0].src))

    const [isZoomed, setIsZoomed] = useState(false);

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    return (
        <div className='degree-section'>

            <div className='details-image ratio_asos'>
                {/*<ReactImageMagnify className="image-magnify" style={{zIndex: "999"}}*/}
                {/*                   enlargedImageContainerDimensions={{width: '170%', height: '140%'}}*/}
                {/*                   imageStyle={{maxWidth: "604px", maxHeight: "462px"}} {...{*/}
                {/*    smallImage: {*/}
                {/*        alt: 'Wristwatch by Ted Baker London',*/}
                {/*        isFluidWidth: true,*/}
                {/*        src: `${CommonPath}/empty-compare.png`,*/}
                {/*    },*/}

                {/*    largeImage: {*/}
                {/*        src: `${CommonPath}/empty-compare.png`,*/}
                {/*        width: 1200,*/}
                {/*        height: 1800*/}
                {/*    }*/}
                {/*}} />*/}

                {/*<MagnifierContainer style={{width: "100%", height: "100%"}}>*/}
                {/*    <div className="example-class image-magnify">*/}
                {/*        <MagnifierPreview imageSrc={`${CommonPath}/empty-compare.png`}/>*/}
                {/*        <MagnifierZoom*/}
                {/*            style={{width: "700px", height: "400px", top: "-400px", left: "100%",zIndex: "999", marginLeft:"20px"}}*/}
                {/*            imageSrc={`${CommonPath}/empty-compare.png`}/>*/}
                {/*    </div>*/}

                {/*</MagnifierContainer>*/}


                {/*<ReactZoomPanPinch*/}
                {/*    className="zoom-container"*/}
                {/*    zoomButtons={false}*/}
                {/*    enablePan={false}*/}
                {/*    minZoom={1}*/}
                {/*    maxZoom={5}*/}
                {/*>*/}
                {/*    <img src={`${CommonPath}/empty-compare.png`} alt="Image" className="image-class" />*/}
                {/*</ReactZoomPanPinch>*/}

                {/*<ZoomEffect smallImageUrl={`${CommonPath}/empty-compare.png`}  largeImageUrl={`${CommonPath}/empty-compare.png`}/>*/}
                {/*<Slider {...AutoFadeSliderPosterData} asNavFor={nav1} ref={(slider) => (slider2.current = slider)}>*/}
                {/*    {singleProduct &&*/}
                {/*        singleProduct.map((item) => {*/}
                {/*            return item.images.map((elem) => {*/}
                {/*                return (*/}
                {/*                   */}
                {/*                    <div key={elem.id}>*/}
                {/*                        <div className='product-image-tag' style={{*/}
                {/*                            height: "400px",*/}
                {/*                            display: "flex",*/}
                {/*                            justifyContent: "center",*/}
                {/*                            alignItems: "center"*/}
                {/*                        }}>*/}

                {/*                            <img src={`${CommonPath}/${elem.src}`} className='img-fluid*/}
                {/*      /!*w-100*!/*/}
                {/*                        image_zoom_cls-0' alt='tag'*/}
                {/*                            style={{maxHeight:"400px"}}*/}
                {/*                            />*/}
                {/*                            <div className='label-tag'>*/}
                {/*                                <h6>*/}
                {/*                                    <i className='fas fa-star'></i> {item?.ratingStars} <span*/}
                {/*                                    className='font-light'>{120}</span>*/}
                {/*                                </h6>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                );*/}
                {/*            });*/}
                {/*        })}*/}
                {/*</Slider>*/}
            </div>
            {VideoPlay !== undefined ? (
                <div className='image-360 videoplay-box' onClick={() => dispatch({type: 'YOUTUBEMODAL'})}>
                    <img src='https://img.icons8.com/ios/50/000000/circled-play.png' alt='image-360'/>
                </div>
            ) : (
                ''
            )}
            <div className='details-image-option black-slide mt-4 rounded overflow-hidden '>
                {/*<VegetableNav VegetableSlider={VegetableSlider} nav1={nav1} slider2={slider2} />*/}

                <Slider {...AutoFadeSliderNavData}
                    // style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                        asNavFor={nav2} ref={(slider) => (slider1.current = slider)}
                >
                    {singleProduct &&
                        singleProduct.map((item) => {
                            return item.images.map((elem, i) => {

                                return (
                                    <div key={elem.id}
                                         className="details-image-option-div"
                                         onClick={() => setImage(elem.src)}
                                    >
                                        <img src={`${CommonPath}/${elem.src}`}


                                             className='img-fluid' alt='details'/>
                                    </div>
                                );
                            });
                        })}
                </Slider>
            </div>
        </div>
    );
};

export default AutoFadeSlider;
