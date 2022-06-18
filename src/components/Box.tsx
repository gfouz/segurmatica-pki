import * as React from "react";
import styled, { css } from "styled-components";
import { row, column } from "../mixins";

interface Props {
  bg?: string;
  max?: string;
  min?: string;
  row?: boolean;
  align?: string;
  width?: string;
  margin?: string;
  resize?: string;
  height?: string;
  justify?: string;
  column?: boolean;
  padding?: string;
  textalign?: string;
  boxProps?: () => string;
  children?: React.ReactNode;
}


function Box(props: Props) {

  return <StyledBox {...props}>{props.children}</StyledBox>;
}
export default Box;

const StyledBox = styled.div`
  position: relative;
  height: ${(props: Props) => props.height};
  width: ${(props: Props) => props.width || "100%"};
  max-width: ${(props: Props) => props.max};
  min-width: ${(props: Props) => props.min};
  margin: ${(props: Props) => props.margin};
  padding: ${(props: Props) => props.padding};
  background-color: ${(props: Props) => props.bg};
  text-align: ${(props: Props) => props.textalign};

  ${(props: Props) =>
    props.row &&
    css`
      ${row(props.justify, props.align)};
      height: ${(props: Props) => props.height || "100%"};
    `};

  ${(props: Props) =>
    props.column &&
    css`
      ${column(props.justify, props.align)};
      height: ${(props: Props) => props.height || "100%"};
    `};

  ${(props: Props) => props.boxProps};
`;
