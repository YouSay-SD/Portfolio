import { FC } from 'react';
import { ContainerProps } from './interface';
import { ContainerStyled } from './styles';

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}

export default Container;