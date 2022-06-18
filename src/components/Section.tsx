import * as React from "react";
import { row, column, breakpoint } from "../mixins";
import styled from "styled-components";

interface Props {
  bg?: string;
  wrap?: string;
  align?: string;
  height?: string;
  margin?: string;
  rezise?: string;
  padding?: string;
  justify?: string;
  direction?: string;
  resize?: string;
  SectionStyles?: string;
  children?: React.ReactNode;
}

const Section = (props: Props) => {
  return (
    <>
      <StyledSection {...props}>{props.children}</StyledSection>
    </>
  );
};

export default Section;

const StyledSection = styled.section`
  width: 100%;
  position: relative;
  height: ${(props: Props) => props.height || "100%"};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  ${(props: Props) => row(props.justify, props.align)};
  flex-wrap: ${(props: Props) => props.wrap || "nowrap"};
  background-color: ${(props: Props) => props.bg || "transparent"};
  @media (max-width: ${(props: Props) => props.rezise || breakpoint.xmd}) {
    ${(props: Props) => column(props.justify, props.align)};
  }
  ${(props: Props)=> props.SectionStyles}; 
`;
