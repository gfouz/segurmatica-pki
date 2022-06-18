import * as React from "react";
import styled from "styled-components";
import Header from '../../components/header/Header';
import {
  Button,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

interface IDrawer {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChakraDrawer({ isOpen, onClose }: IDrawer) {

  const footerProps: React.CSSProperties = {
  height: "150px",
  backgroundImage: `url('./images/aside.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "70px",
};

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <img
              style={{ width: "120px" }}
              src="./images/segurmatica.jpg"
              alt="Segurmática"
            />
          </DrawerHeader>
          <DrawerBody>
            <Header color="#1a2253" column />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
           <div style={{ ...footerProps }}></div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
