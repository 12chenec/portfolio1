import React from 'react';

const LogoStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" id="star" version="1.1" viewBox="0 0 1024 1024">
    <defs>
      <radialGradient
        id="radial-gradient"
        cx="512"
        cy="512"
        r="459.2"
        fx="512"
        fy="512"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fffbd1"></stop>
        <stop offset="0.2" stopColor="#ffe895"></stop>
        <stop offset="0.5" stopColor="#fac080"></stop>
      </radialGradient>
      <linearGradient
        id="linear-gradient"
        x1="373.1"
        x2="660.6"
        y1="368.7"
        y2="665.4"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="0.5" stopColor="#fbe2b6"></stop>
        <stop offset="1" stopColor="#f9c670"></stop>
      </linearGradient>
    </defs>
    <g id="Layer_11" data-name="Layer_1">
      <path
        fill="url(#linear-gradient)"
        d="M567.6 443.8s-52.2 46.8-107.7 1.5L323 321.4l123.9 136.9c45.3 55.5-1.5 107.7-1.5 107.7L325 699l-1.6 1.6 133-120.4s52.2-46.8 107.7-1.5L701 702.6 577.1 565.7c-45.3-55.5 1.5-107.7 1.5-107.7L699 325l1.6-1.6z"></path>
      <path
        fill="url(#radial-gradient)"
        d="M662.2 496.6s-120-6.6-132.5-128.9L513.9 51.3l-15.8 316.4C485.6 490 365.6 496.6 365.6 496.6L58.1 512h-3.8l307.5 15.4s120 6.6 132.5 128.9l15.8 316.4 15.8-316.4C538.4 534 658.4 527.4 658.4 527.4L965.9 512h3.8z"></path>
    </g>
  </svg>
);

export default LogoStar;
