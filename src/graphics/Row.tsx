import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  vh?: boolean;
  up?: boolean;
  wrap?: boolean;
  down?: boolean;
  align?: string;
  left?: boolean;
  right?: boolean;
  rezise?: string;
  widen?: boolean;
  evenly?: boolean;
  spread?: boolean;
  center?: boolean;
  between?: boolean;
  heighten?: boolean;
  css?: () => string;
  children?: React.ReactNode;
}

const Row = (props: Props) => {
  return <StyledRow {...props}>{props.children}</StyledRow>;
};
export default Row;

const StyledRow = styled.div`
   display: flex;
   align-items: center;
  ${(props: Props) =>
    props.center &&
    css`
      justify-content: center;
    `};
  ${(props: Props) =>
    props.left &&
    css`
      justify-content: flex-start;
    `}; 
  ${(props: Props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `};  
  ${(props: Props) =>
    props.evenly &&
    css`
      justify-content: space-evenly;
    `};
  ${(props: Props) =>
    props.between &&
    css`
      justify-content: space-between;
    `};
  ${(props: Props) =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `};   
  ${(props: Props) =>
    props.spread &&
    css`
       width: 100%;
       height: 100%;
    `};
  ${(props: Props) =>
    props.widen &&
    css`
       width: 100%;
    `};
  ${(props: Props) =>
    props.heighten &&
    css`
       height: 100%;
    `};      
  ${(props: Props) =>
    props.up &&
    css`
       align-items: flex-start;
    `};  
  ${(props: Props) =>
    props.down &&
    css`
       align-items: flex-end;
    `}; 
  ${(props: Props) =>
    props.vh &&
    css`
       width: 100%;
       min-height: 100vh;
    `};       
  @media (max-width: ${(props: Props) => props.rezise}){
     max-width: 100%;
  }  
  ${(props: Props) => props.css};  
`;
