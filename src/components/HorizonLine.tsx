import * as React from 'react'
import styled from 'styled-components'

interface Props {
  color: string;
}

function HorizonLine(props: Props) {

	return(
      <StyledLine {...props}>
        <div className="line"></div>
      </StyledLine>
		);
}
export default HorizonLine;

const StyledLine = styled.div`
  width: 100%;
   .line {
   	 position: relative;
   	 left: 5%;
     right: 5%;
     height: 5px;
     border-radius: 2px;
     animation: line 2s;
     animation-fill-mode: forwards;
     background-color: ${(props: Props)=> props.color};
   }
   @keyframes line {
   	 from {
   	 	width: 0;
   	 	background-color: #ffffff;
   	 }
   	 to {
   	 	width: 90%;
   	 	background-color: ${(props: Props)=> props.color};
   	 }
   }
`;

