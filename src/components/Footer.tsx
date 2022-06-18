import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  bg?: string;
  c?: string;
  itemOne?: string;
  itemTwo?: string;
  h?: string;
  p?: string;
  simple?: boolean;
  align?: string;
  children?: React.ReactNode;
}

function Footer(props: Props) {
  return (
    <>
      <StyledFooter {...props}>{props.children}</StyledFooter>
    </>
  );
}
export default Footer;

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  height: ${(props: Props) => props.h};
  padding: ${(props: Props)=> props.p};
  color: ${(props: Props) => props.c};
  background-color: ${(props: Props) => props.bg};
  ${(props: Props) =>
    props.simple &&
    css`
      --full-height: ${(props: Props) => props.h};
      width: 100%;
      position: relative;
      height: var(--full-height);
      line-height: var(--full-height);
      text-align: ${(props: Props) => props.align || "center"};
    `};
`;
