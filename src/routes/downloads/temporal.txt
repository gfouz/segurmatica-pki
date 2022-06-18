import * as React from "react";
import styled from 'styled-components';
import Header from '../../components/header/Header';
import {drawerProps} from './constant';


import {
  Button,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react'

export default function Homepage() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null)

  return (
    <>
      <StyledHome>
        <header>
          <Button
            m="1em"
            ref={btnRef}
            variant='ghost'
            onClick={onOpen}>
            <strong style={{ color: "#555555" }}>{isOpen ? "CERRAR" : "ABRIR"}</strong>
          </Button>
        </header>

      
        <footer>
           <Heading  size='sm'>Segurmática &copy; {new Date().getFullYear()}</Heading>
        </footer>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
               <img 
                 style={{width:"120px"}}
                 src="./images/segurmatica.jpg" 
                 alt="Segurmática" />
            </DrawerHeader>
            <DrawerBody >
              <Header color="#1a2253" column />
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
              <div style={{...drawerProps}}></div>
          </DrawerContent>
        </Drawer>
      </StyledHome>
    </>
  )
}

const StyledHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  header {
    width: 100%;
    background-color: #9f0bfe;
  }
  footer {
    width: 100%;
    color: #ffffff;
    padding: 2em;
    text-align: center;
    background-color: #9f0bfe;
  }
`;