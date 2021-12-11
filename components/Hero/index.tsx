import React, { FC, useState } from "react";
import Slider from "react-slick";
import { data, slickTitleProps, slickImageProps } from './data';
import { HeroStyled, ImageStyled, SlideStyled } from './styles';
import { ArcText } from '../../components';
// import ReactArcText from 'react-arc-text';
// import{curveText} from 'curvetext'
// import ArcText from 'arc-text';

const Hero: FC = () => {
  const [activeSlide, setActiveSlide] = useState(false)
  const [slickTitle, setSlickTitle] = useState<any>()
  const [slickImage, setSlickImage] = useState<any>()
  const [slickIndex, setSlickIndex] = useState<number>(0);

  return (
    <HeroStyled>
      {/* Slick Image */}
      <Slider
        className='slick-image'
        asNavFor={slickTitle} 
        ref={(slider1) => setSlickTitle(slider1)}
        {...slickImageProps}
      >
        {data.map(({ id, title, image }) => {
          return (
            <SlideStyled 
              key={id}
            >
              <ImageStyled
                alt={title}
                src={image}
                active={slickIndex === id ? activeSlide : false}
              />
            </SlideStyled>
          )
        })}
      </Slider>

      {/* Slick Title */}
      <Slider
        {...slickTitleProps}
        className='slick-title'
        asNavFor={slickTitle}
        ref={slider2 => setSlickImage(slider2)}
        beforeChange= {(prevSlide, nextSlide) => {
          setSlickIndex(nextSlide);
        }}
      >
        {data.map(({ id, title }) => {
          return (
            <SlideStyled 
              key={id}
            >
              <ArcText
                activeSlide={activeSlide}
                onMouseEnter={() => setActiveSlide(true)}
                onMouseLeave={() => setActiveSlide(false)}
                text={title.toUpperCase()}
                radius={2000}
                arc={35}
              />
            </SlideStyled>
          )
        })}
      </Slider>
    </HeroStyled>
  )
}

export default Hero;
