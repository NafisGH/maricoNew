import React from 'react'
import StyledSlidersLib from './StyledSlidersLib'
import Slider from 'react-slick';
import { dataBlog } from '../../../utils/dataBlog';
import ItemSlider from './ItemSlider/ItemSlider';


export const SlidersLib = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <StyledSlidersLib>
        <Slider {...settings}>
        {dataBlog.map((item) => {
            return <ItemSlider key={item.id} blogProps={item} />;
          })}
        </Slider>
    </StyledSlidersLib>
  )
}


