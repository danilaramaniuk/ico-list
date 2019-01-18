import React from 'react';
import PropTypes from 'prop-types';

const Litcoin = ({ iconColor }) => (
  <svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <title>iconfinder_LTC_1175271</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <path d="M0,0 L256,0 C258.761424,-5.07265313e-16 261,2.23857625 261,5 L261,1019 C261,1021.76142 258.761424,1024 256,1024 L0,1024 L0,0 Z" id="path-1" />
      <filter x="-2.9%" y="-0.7%" width="105.7%" height="101.5%" filterUnits="objectBoundingBox" id="filter-2">
        <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101477582 0" type="matrix" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Litecoin" transform="translate(-30.000000, -204.000000)">
        <rect id="background" fill={iconColor} x="0" y="0" width="1441" height="1024" />
        <g id="menu">
          <g id="form">
            <g id="Rectangle">
              <use fill="black" fillOpacity="1" filter="url(#filter-2)" />
              <use fill="#FFFFFF" fillRule="evenodd" />
            </g>
          </g>
          <g id="Litcoin" transform="translate(30.000000, 167.000000)" fill="#00C3B3" fillRule="nonzero">
            <g id="iconfinder_LTC_1175271" transform="translate(0.000000, 37.000000)">
              <path d="M17.4998457,0 C7.83490682,0 0,7.83506109 0,17.5001543 C0,27.1654017 7.83490682,35 17.4998457,35 C27.1650932,35 35,27.1654017 35,17.5001543 C35.0001543,7.83506109 27.1652474,0 17.4998457,0 Z M24.2930088,26.0338763 L10.6193694,26.0338763 L11.7686351,20.5473282 L9.5339689,22.079631 L10.0768234,19.0771936 L12.414075,17.4682216 L14.7067444,6.52489819 L18.9753795,6.52489819 L17.3969517,14.0390905 L22.9544613,10.2142725 L22.3031593,13.3253116 L16.7465753,17.1345489 L15.6472911,22.3687215 L25.0524497,22.3687215 L24.2930088,26.0338763 Z" id="LTC" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Litcoin.propTypes = {
  iconColor: PropTypes.string,
};

Litcoin.defaultProps = {
  iconColor: 'white',
};

export default Litcoin;
