import { createElement } from "react";
import styled from "styled-components";

interface Props {
  top?: string;
  tag?: string;
  left?: string;
  right?: string;
  bottom?: string;
  text?: string;
  color?: string;
  space?: string;
  width?: string;
  family?: string;
  margin?: string;
  position?: string;
  maxwidth?: string;
  fontsize?: string;
  textalign?: string;
  transform?: string;
  children?: React.ReactNode;
}

export function Headline(props: Props) {
  let tag = props.tag || "h1";
  const element = createElement(tag, null, `${props.text}`);
  return (
    <>
      <StyledHeadline {...props}>{element}</StyledHeadline>
    </>
  );
}
export default Headline;

const StyledHeadline = styled.div`
  top: ${(props: Props) => props.top};
  left: ${(props: Props) => props.left};
  right: ${(props: Props) => props.right};
  bottom: ${(props: Props) => props.bottom};
  color: ${(props: Props) => props.color};
  margin: ${(props: Props) => props.margin};
  width: ${(props: Props) => props.width};
  max-width: ${(props: Props) => props.maxwidth};
  font-size: ${(props: Props) => props.fontsize};
  text-align: ${(props: Props)=> props.textalign};
  font-family: ${(props: Props) => props.family};
  letter-spacing: ${(props: Props)=> props.space};
  text-transform: ${(props: Props)=> props.transform};
  position: ${(props: Props)=> props.position};
`;
