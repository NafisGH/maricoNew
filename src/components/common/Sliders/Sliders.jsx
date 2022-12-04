import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Button from "../Button";
import ItemSlider from "./ItemSlider/ItemSlider";
import { dataBlog } from "../../../utils/dataBlog";

import StyledItemSlider from "./ItemSlider/StyledItemSlider";

// const PAGE_WIDTH = 1100;

export default function Sliders({ blogProps }) {
  const [offset, setOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(1100);

  const [selectedSlide, setSelectedSlide] = useState(0);

  // const refList = useRef(true);

  const handleClickLeftArrow = () => {
    setSelectedSlide((prevSelectedSlide) => {
      return selectedSlide - 1;
    });
  };

  const lastIndexSlide = useMemo(() => {
    return blogProps.length - 1;
  }, [blogProps.length]);

  const handleClickRightArrow = () => {
    setSelectedSlide((prevSelectedSlide) => {
      return selectedSlide + 1;
    });
  };

  useEffect(() => {
    setOffset(-(sliderWidth * selectedSlide));
  }, [selectedSlide]);

  return (
    <StyledItemSlider>
      <Button classBtn="arrow" handleClick={handleClickLeftArrow}>
        <BsArrowLeftCircle />
      </Button>
      <div className="window">
        <ul
          className="box-sliders"
          style={{
            width: `100%`,
            transform: `translateX(${offset}px)`,
          }}
        >
          {
            dataBlog.map((item) => <ItemSlider blogProps={item} key={item.id} />)
          }
        </ul>
      </div>
      <Button classBtn="arrow" handleClick={handleClickRightArrow}>
        <BsArrowRightCircle />
      </Button>
    </StyledItemSlider>
  );
}
