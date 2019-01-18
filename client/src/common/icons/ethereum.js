import React from 'react';
import PropTypes from 'prop-types';

const Ethereum = ({ iconColor }) => (
  <svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <title>iconfinder_ETH-alt_1175229</title>
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
      <g id="Ethereum" transform="translate(-30.000000, -347.000000)">
        <rect id="background" fill="#FFFFFF" x="0" y="0" width="1441" height="1024" />
        <g id="menu">
          <g id="form">
            <g id="Rectangle">
              <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1" />
              <use fill={iconColor} fillRule="evenodd" xlinkHref="#path-1" />
            </g>
          </g>
          <g id="Litcoin" transform="translate(30.000000, 202.000000)" />
          <g id="ethereum" transform="translate(30.000000, 343.000000)" fill="#FF6F79" fillRule="nonzero">
            <g id="iconfinder_ETH-alt_1175229" transform="translate(0.000000, 4.000000)">
              <path d="M17.4711674,0 C7.82211454,0 0,7.82211454 0,17.4711674 C0,27.1202203 7.82211454,34.9423348 17.4711674,34.9423348 C27.1202203,34.9423348 34.9423348,27.1202203 34.9423348,17.4711674 C34.9423348,7.82211454 27.1202203,0 17.4711674,0 Z M17.2446696,29.0462996 L10.3402643,19.2796035 L17.2446696,23.3220264 L17.2446696,29.0462996 Z M17.2446696,21.8905727 L10.2935463,17.8188546 L17.2446696,14.7740088 L17.2446696,21.8905727 Z M17.2446696,14.2847797 L10.5174229,17.2312555 L17.2446696,5.92856828 L17.2446696,14.2847797 Z M17.6927313,5.92517621 L24.5144934,17.2731938 L17.6927313,14.2847797 L17.6927313,5.92517621 Z M17.6927313,29.0462996 L17.6927313,23.3220264 L24.5971366,19.2796035 L17.6927313,29.0462996 Z M17.6927313,21.8907269 L17.6927313,14.774163 L24.6489427,17.8211674 L17.6927313,21.8907269 Z" id="Shape" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Ethereum.propTypes = {
  iconColor: PropTypes.string,
};

Ethereum.defaultProps = {
  iconColor: 'white',
};

export default Ethereum;
