import React, { useEffect } from 'react';
import './HexagonBackground.css'; // Move the styles into a CSS file

const HexagonBackground = () => {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        const moveCursor = (e) => {
            const X = e.clientX;
            const Y = e.clientY;

            cursor.style.left = X + "px";
            cursor.style.top = Y + "px";
        };

        document.addEventListener('mousemove', moveCursor);

        return () => document.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div className="hexagon-container">
            <div className="cursor"></div>

            {[...Array(10)].map((_, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {[...Array(16)].map((_, hexIndex) => (
                        <div className="hexagon" key={hexIndex}></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default HexagonBackground;
