import * as React from 'react'
import styled from 'styled-components'
import ChakraDrawer from './Drawer';
import { Button, useDisclosure } from '@chakra-ui/react'

interface ILayout {
 btncolor?: string;
 headercolor?: string;
 headerbg?: string;
 footercolor?: string;
 footerbg?: string;
 children?: React.ReactNode;
}

export default function Layout(props: ILayout) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)
  return (
    <StyledLayout {...props}>
      <div className="layout">
        <header>
          <Button
            m="1em"
            ref={btnRef}
            variant='ghost'
            onClick={onOpen}>
            <strong 
              style={{ color: props.btncolor || "#ffffff" }}
            >{isOpen ? "CERRAR" : "ABRIR"}
            </strong>
          </Button>
        </header>

        <div className="main">{props.children}</div>

        <footer>Segurmática {new Date().getFullYear()}</footer>
        <ChakraDrawer isOpen={isOpen} onClose={onClose} />
      </div>
    </StyledLayout>

  );
}

const StyledLayout = styled.div`
   .layout {
    display: grid;
    min-height: 100vh;
    grid-template-areas: "header header"
                         "main  main"
                         "footer  footer";
    grid-template-rows:  70px 1fr 70px;
    grid-template-columns: 1fr;
    @media (max-width: 500px) {
      grid-template-rows: 65px 1fr 65px;
    }
}

header{
  grid-area: header;
  color: ${(props: ILayout)=>props.headercolor || "#ffffff"};
  background-color: ${(props: ILayout)=>props.headerbg || "#333333"};
}

.main{
  grid-area: main;
}

footer{
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  color: ${(props: ILayout)=>props.footercolor || "#ffffff"};
  background-color: ${(props: ILayout)=>props.footerbg || "#333333"};
}


`;

