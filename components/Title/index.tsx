import { ElementType, ComponentPropsWithRef } from 'react';
import { TitleProps } from './interface';
import { TitleStyled } from './styles';

const Title = <T extends ElementType = 'h2'>({ tag = 'h2', children, ...props }: TitleProps<T> & ComponentPropsWithRef<T>) => {
  return <TitleStyled as={tag} {...props}>{children}</TitleStyled>
}

export default Title;
