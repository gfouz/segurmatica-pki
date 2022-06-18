import * as React from "react";


import {
  Box,
  Flex,
  Text,
  Radio,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  HStack,
  Stack,
  Button,
  Center,
  Select,
  Checkbox,
  Heading,
  RadioGroup,
  ChakraProvider
} from "@chakra-ui/react";


export default function Test() {

  return (
  <ChakraProvider>  
  <Stack spacing={4}>
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<h4>giovani</h4>}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter amount' />
    
  </InputGroup>
</Stack>
</ChakraProvider>

    );
}

