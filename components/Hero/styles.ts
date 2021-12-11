import styled from '@emotion/styled';
import { ImageProps } from './interface';

export const HeroStyled = styled.section`
  position: relative;
  height: 100vh;
  background-color: black;
  overflow: hidden;

  .slick-slider {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .slick-slide {
    height: 440px;
  }

  .slick-list {
    width: 100%;
    height: 100%;
  }

  // Slick Title
  .slick-title {
    display: flex;
    align-items: center;

    .slick-list {
      height: 500px;
      transition: all .5s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .slick-slide {
      width: 72vw;
      opacity: .5;
      transition: all .5s ease;
      transform: translateY(100px);

      &.slick-center {
        opacity: 1;
        transform: initial;
      }
    }
  }

  // Slick Dots
  .slick-dots {
    position: absolute;
    width: max-content;
    bottom: 70px;
    left: 100px;
    display: flex !important;
    grid-gap: 20px;

    li {
      width: 8px;
      height: 8px;
      margin: initial;
      transition: all .3s ease;

      &:hover {
        transform: scale(1.5);

        button {
          background-color: transparent;
          border: 1px solid white;
        }
      }

      &.slick-active {
        transform: scale(2);

        button {
          background-color: transparent;
          border: 1px solid white;
        }
      }

      button {
        background-color: white;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        padding: initial;
        transition: all .3s ease;

        &:before {
          display: none;
        }
      }
    }
  }

  // Slick Image
  .slick-image {
    .slick-slide {
      &.slick-active {
        img {
          opacity: .9;
        }
      }
    }
  }
`;

export const ImageStyled = styled.img<ImageProps>`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  opacity: .6;
  transform: ${({ active }) => active ? 'scale(1.05)' : ''};
  transition: all .4s ease;
`

export const SlideStyled = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;