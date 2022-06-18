import React from "react";
import styled from 'styled-components';

export const StyledSlider = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0 2em 0;
  .glider__item {
     position: relative;
     display: flex;
     justify-content: center;

     width: 100%;
     padding: 2em 0;
    }
  .glider-image__box {
    position: relative;
    padding: 10px;
    max-width:800px;
    background-color: #44444499;   
  }  
  .glider__text {
    color: #f1f1f1;
    padding: 1em;
    font-family: calibri;
    font-size: 1.3em;
    @media (max-width: 420px) {
      font-size: 1em;
    }
  }    
    .slick-dots li button:before {
    font-family: 'slick';
    font-size: 16px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: .75;
    color: #e1cf62;
}

`;  