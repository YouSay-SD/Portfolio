import styled from "@emotion/styled";
import { TitleStyledProps, SizesProps } from './interface';

const sizes: SizesProps = {
  sm: '42px',
  md: '50px',
  lg: '120px'
}

const lineHeights: SizesProps = {
  sm: '50px',
  md: '60px',
  lg: '130px'
}

export const TitleStyled = styled.div<TitleStyledProps>`
  font-size: ${({ size }) => sizes[size ? size : 'md']};
  line-height: ${({ size }) => lineHeights[size ? size : 'md']};
  position: ${({ main }) => main ? 'absolute' : 'relative'};
  color: white;
`;