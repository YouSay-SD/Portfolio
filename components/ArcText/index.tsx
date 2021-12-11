import { FC } from "react";
import { ArcTextProps } from './interface';
import { CharStyled, ArcTextStyled } from './styles';

const ArcText: FC<ArcTextProps> = ({ text, arc, radius, onMouseEnter, onMouseLeave, activeSlide }) => {
  const characters = text.split('');
  const degree = arc / characters.length;
  
  return (
    <ArcTextStyled
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {characters.map((char, i) => {
        return (
          <CharStyled 
            key={`arc-text-span-${i}`}
            style={{
              transform: `rotate(${degree * i - arc / 2}deg)`,
              transformOrigin: `0 ${radius}px 0`,
            }}
          >
            {char}
          </CharStyled>
        );
      })}
    </ArcTextStyled>
  )
}

export default ArcText;