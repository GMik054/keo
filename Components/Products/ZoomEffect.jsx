// import React, {useRef, useState} from 'react';
//
// const ImageZoom = ({smallImageUrl, largeImageUrl }) => {
//     const zoomRef = useRef(null);
//     const [zoomed, setZoomed] = useState(false);
//     const [zoomedX, setZoomedX] = useState(0);
//     const [zoomedY, setZoomedY] = useState(0);
//
//     const handleMouseEnter = (e) => {
//         setZoomed(true);
//     };
//
//     const handleMouseLeave = () => {
//         setZoomed(false);
//     };
//
//     const handleMouseMove = (e) => {
//         const { left, top, width, height } = e.target.getBoundingClientRect();
//         const x = (e.clientX - left) / width;
//         const y = (e.clientY - top) / height;
//         setZoomedX(x);
//         setZoomedY(y);
//     };
//
//     const calculateBackgroundPosition = () => {
//         return `calc((100% - var(--zoomed-x)) * 100%) calc((100% - var(--zoomed-y)) * 100%)`;
//     };
//
//     return (
//         <div
//             className={`zoom-container ${zoomed ? 'zoomed' : ''}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             onMouseMove={handleMouseMove}
//         >
//             <div className="zoom-wrapper">
//                 <img className="small-image" src={smallImageUrl} alt="Small Image" />
//                 <div
//                     className="zoom"
//                     ref={zoomRef}
//                     style={{
//                         backgroundImage: `url(${smallImageUrl})`,
//                         '--zoomed-x': zoomedX,
//                         '--zoomed-y': zoomedY,
//                         backgroundPosition: calculateBackgroundPosition(),
//                     }}
//                 ></div>
//             </div>
//         </div>
//     );
// };
//
// export default ImageZoom;