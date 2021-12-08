import React, { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { data, sliderSettings } from './data';
import { HeroStyled, ImageStyled, SlideStyled } from './styles';
import { Title, ArcText } from '../../components';
// import ReactArcText from 'react-arc-text';
// import{curveText} from 'curvetext'
// import ArcText from 'arc-text';

const Hero: FC = () => {
  // const arcText = new ArctText(document.getElementById('myElement'));
  const titleRef = useRef<any>(null);
  const [curve, setCurve] = useState(150)

  return (
    <HeroStyled>
      {/* <h2 ref={titleRef}>KORONE</h2> */}
      {/* <button onClick={() => setCurve(730)}>CLICK</button> */}
      <Slider {...sliderSettings}>
        {data.map(({ id, title, image }) => {
          return (
            <SlideStyled 
              key={id}
            >
              {/* <Title 
                size='lg' 
                main
              >
                {title}
              </Title> */}
              <ArcText
                text={title.toUpperCase()}
                arc={50}
                radius={1900}
              />
              {/* <h2 ref={titleRef}>{title}</h2> */}
              {/* <ReactArcText
                text={title}
                direction={1}
                arc={100}
              /> */}
              {/* <h2>
                <svg viewBox="0 0 130 130">
                <path id="MyPath" fill="none" stroke="lightblue"
                      d="m10,45c53,-33 96,3 96,3" />
                <text><textPath href="#MyPath">CURVE ME!</textPath></text> 
                </svg>
              </h2> */}
              <ImageStyled
                alt={title}
                src={image}
                // width={1000}
                // height={700}
                // layout='fill'
                // objectFit='cover'
              />
            </SlideStyled>
          )
        })}
      </Slider>
    </HeroStyled>
  )
}

export default Hero;
