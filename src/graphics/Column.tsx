import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  up?: boolean;
  full?: boolean;
  right?: boolean;
  wrap?: boolean;
  down?: boolean;
  align?: string;
  left?: boolean;
  rezise?: string;
  evenly?: boolean;
  spread?: boolean;
  center?: boolean;
  between?: boolean;
  css?: () => string;
  children?: React.ReactNode;
}

const Column = (props: Props) => {
  return <StyledColumn {...props}>{props.children}</StyledColumn>;
};
export default Column;

const StyledColumn = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
  ${(props: Props) =>
    props.center &&
    css`
      justify-content: center;
    `};
  ${(props: Props) =>
    props.up &&
    css`
      justify-content: flex-start;
    `}; 
  ${(props: Props) =>
    props.down &&
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
    props.full &&
    css`
       width: 100%;
       height: 100vh;
    `};  
  ${(props: Props) =>
    props.left &&
    css`
       align-items: flex-start;
    `};  
  ${(props: Props) =>
    props.right &&
    css`
       align-items: flex-end;
    `};    
  @media (max-width: ${(props: Props) => props.rezise}){
     max-width: 100%;
  }  
  ${(props: Props) => props.css};  
`;
