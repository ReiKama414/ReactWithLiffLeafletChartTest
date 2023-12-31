import React from 'react';
import style from './httpStatus.module.sass';

const HttpStatus = ({
    color,
    title,
    message1,
    message2,
    faceColor = '#f9d7be',
}) => {
    return (
        <div className="simpleTopSpacing vh-100 vw-100 d-flex flex-column align-items-center justify-content-center px-4 bg-dark text-light">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#goo)"
                width="300"
                height="300"
            >
                <defs>
                    <filter>
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                        />
                    </filter>
                </defs>
                <g>
                    <circle r="100" cy="145" cx="150" fill={color}>
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 145 150"
                            to="360 145 150"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle r="100" cy="155" cx="150" fill={color}>
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="360 155 150"
                            to="0 155 150"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle r="100" cy="150" cx="145" fill={color}>
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 150 145"
                            to="360 150 145"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle r="100" cy="150" cx="155" fill={color}>
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="360 150 155"
                            to="0 150 155"
                            dur="2.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle r="25" cy="130" cx="95" fill={faceColor}>
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            dur="3s"
                            repeatCount="indefinite"
                            values="-10 0; 0 -10; 10 0; 0 10; -10 0"
                        />
                    </circle>
                    <circle r="25" cy="130" cx="185" fill={faceColor}>
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            dur="3s"
                            repeatCount="indefinite"
                            values="-10 0; 0 -10; 10 0; 0 10; -10 0"
                        />
                    </circle>
                    <ellipse rx="13" ry="1" cx="140" cy="115">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            dur="3s"
                            repeatCount="indefinite"
                            values="-10 0; 0 -10; 10 0; 0 10; -10 0"
                        />
                    </ellipse>
                    <circle r="15" cy="110" cx="105">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            dur="3s"
                            repeatCount="indefinite"
                            values="-10 0; 0 -10; 10 0; 0 10; -10 0"
                        />
                    </circle>
                    <circle r="15" cy="110" cx="175">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            dur="3s"
                            repeatCount="indefinite"
                            values="-10 0; 0 -10; 10 0; 0 10; -10 0"
                        />
                    </circle>
                </g>
            </svg>
            <div
                className="text-center"
                style={{ transform: 'translateY(-20%)' }}
            >
                <h1 className={style.title}>{title}</h1>
                <h5>{message1}</h5>
                <p style={{ fontSize: '0.85rem' }}>{message2}</p>
            </div>
        </div>
    );
};

export default HttpStatus;
