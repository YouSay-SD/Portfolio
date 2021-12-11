import styled from "@emotion/styled";

export const ArcTextStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 300px;
  text-align: center;
  /* font-family: 'Amatic SC', cursive; */
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 190px;
  font-weight: bold;
  /* color: antiquewhite; */
  color: white;
  line-height: 1.15;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

export const CharStyled = styled.span`
  position: absolute;
  /* font-family: 'Amatic SC', cursive; */
  font-family: 'Pathway Gothic One', sans-serif;
  z-index: 1;
`;