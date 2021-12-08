import { ElementType, ReactElement } from "react";

export interface TitleProps<T extends ElementType> {
  as?: T;
  children: ReactElement | ReactElement[] | string;
  size?: string;
  tag?: string;
  main?: boolean;
} 

// Styles Props
export interface TitleStyledProps {
  size?: string;
  main?: boolean;
}

export interface SizesProps {
  [key: string]: string;
}