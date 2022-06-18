import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  src?: string;
  alt?: string;
  top?: string;
  left?: string;
  right?: string;
  auto?: boolean;
  float?: string;
  align?: string;
  width?: string;
  bottom?: string;
  radius?: string;
  height?: string;
  cover?: boolean;
  margin?: string;
  padding?: string;
  position?: string;
  maxwidth?: string;
  boxshadow?: string;
  centered?: boolean;
  children?: React.ReactNode;
}
const Image = (props: Props) => {
  return (
    <>
      <StyledImage {...props} />
    </>
  );
};

export default Image;

const StyledImage = styled.img`
  ${(props: Props) =>
    props.cover &&
    css`
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    `};
  ${(props: Props) =>
    props.auto &&
    css`
      max-width: 100%;
      height: auto;
    `};
  ${(props: Props) =>
    props.centered &&
    css`
      transform: translate(-50%);
    `};  

  top: ${(props: Props) => props.top};
  left: ${(props: Props) => props.left};
  width: ${(props: Props) => props.width};
  right: ${(props: Props) => props.right};
  float: ${(props: Props) => props.float};
  bottom: ${(props: Props) => props.bottom};
  position: ${(props: Props) => props.position};
  max-width: ${(props: Props) => props.maxwidth};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  border-radius: ${(props: Props) => props.radius || "0"};
  box-shadow: ${(props: Props) => props.boxshadow || "0"};
`;
