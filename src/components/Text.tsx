import * as React from 'react'
import styled from 'styled-components'
import { row, column, breakpoint } from '../mixins';

interface Props {
   color?: string
   align?: string
   fontfamily?: string
   fontsize?: string
   width?: string
   maxwidth?: string
   padding?: string
   margin?: string
   children?: React.ReactNode
}

const Text = (props: Props)=> {

	return(
		    <>
           <StyledText {...props}>{props.children}</StyledText>
        </>
		);
}
export default Text;

const StyledText = styled.p`
  width: ${(props: Props)=> props.width};
  text-align: ${(props: Props)=> props.align || "left"};
  max-width: ${(props: Props)=> props.maxwidth};
  padding: ${(props: Props)=> props.padding};
  margin: ${(props: Props)=> props.margin};
  color: ${(props: Props) => props.color || "#666666"};
  font-family: ${(props: Props) => props.fontfamily || "calibri"};
  font-size: ${(props: Props) => props.fontsize || "var(--global-fontsize)"};
  @media (max-width: ${(props: Props) => breakpoint.xmd}){
     max-width: 100%;
  }
`;