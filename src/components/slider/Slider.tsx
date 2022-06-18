import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import {sliderText} from './constants';
import {Heading} from '@chakra-ui/react';
import {StyledSlider} from './Slider.Styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Glider() {
  
  interface ISettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    autoplay: boolean;
    autoplaySpeed: number;
    slidesToShow: number;
    slidesToScroll: number;
  }
  var settings: ISettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <StyledSlider> 
    <Slider {...settings}>
     <div>
      <section className="glider">
      <div className="glider__item">
       <div className="glider-image__box">
        <Heading size="sm" m="0em 1em" color="#cccccc">PKI Servicios</Heading>
        <p className="glider__text">{sliderText}</p>
       </div> 
      </div>
    </section>
     </div> 
     <div>
      <section className="glider">
      <div className="glider__item">
       <div className="glider-image__box">
        <Heading size="sm" m="0em 1em" color="#cccccc">PKI Servicios</Heading>
        <p className="glider__text">{sliderText}</p>
       </div> 
      </div>
    </section>
     </div> 
     <div>
      <section className="glider">
      <div className="glider__item">
       <div className="glider-image__box">
       <Heading size="sm" m="0em 1em" color="#cccccc">PKI Servicios</Heading>
       <p className="glider__text">{sliderText}</p>
       
      </div>
      </div>  
    </section>
     </div>
     <div>
      <section className="glider">
      <div className="glider__item">
        <div className="glider-image__box">
        <Heading size="sm" m="0em 1em" color="#cccccc">PKI Servicios</Heading>
        <p className="glider__text">{sliderText}</p>
        
       </div> 
      </div>
    </section>
     </div> 
     <div>
      <section className="glider">
      <div className="glider__item">
        <div className="glider-image__box">
        <Heading size="sm" m="0em 1em" color="#cccccc">PKI Servicios</Heading>
        <p className="glider__text">{sliderText}</p>
       </div> 
      </div>  
    </section>
     </div> 
    </Slider>
   </StyledSlider> 
  );
}

