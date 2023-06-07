import React, { useState } from "react";

const ZoomEffect = ({imageUrl}) => {
    const [isZoomActive, setIsZoomActive] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (event) => {
        setIsZoomActive(true);
    };

    const handleMouseLeave = (event) => {
        setIsZoomActive(false);
    };

    const handleMouseMove = (event) => {
        const { left, top, width, height } = event.target.getBoundingClientRect();
        const { clientX, clientY } = event;

        let x = ((clientX - left) / width) * 100;
        let y = ((clientY - top) / height) * 100;

        // Restrict x and y to stay within 0-100 range
        x = Math.max(0, Math.min(x, 100));
        y = Math.max(0, Math.min(y, 100));

        setMousePosition({ x, y });
    };

    return (
        <div
            className="zoom-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {isZoomActive && (
            <div
                className="zoom-rect"
                style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: `translate(-${mousePosition.x}%, -${mousePosition.y}%)`,
                }}
            ></div>
            )}

            <img
                className="zoom-image"
                src={imageUrl}
                alt="Product Image"
            />

            {isZoomActive && (
                <div
                    className="zoom-window"
                    style={{
                        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                        backgroundImage: `url(${imageUrl})`,
                    }}
                ></div>
            )}
        </div>
    );
};

export default ZoomEffect;