import * as React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Box,
  Flex,
  Text,
  Radio,
  Input,
  HStack,
  Button,
  Center,
  Checkbox,
  Heading,
  RadioGroup,
  Container,
} from "@chakra-ui/react";


export default function ContactForm() {

  interface IFormInput {
    name: string;
    email: string;
    message: string;
    policy: boolean;
  }
  const { register, handleSubmit, formState: { errors }} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return(
    <>
     <StyledContact>
       <form onSubmit={handleSubmit(onSubmit)}>
          <Center w="100%" p="1.5em">
            <Heading as="h3" size="lg" color="#385898">CONTACTO</Heading>
          </Center>
          <HStack spacing={2} p="0.7em">
            <Container textAlign="left">
              <label style={{ color:"#888888"}}>
                <strong>Nombre</strong>
              </label>
              <Input 
              type="email"
              variant="outline"
              {...register("name", { required: true })} 
              />
            </Container>
          </HStack>  
          <HStack spacing={2} p="0.7em">
             <Container textAlign="left">
              <label style={{ color:"#888888" }}>
                <strong>Email</strong>
              </label>
              <Input 
              type="email"
              variant="outline" 
              {...register("email", { required: true })} 
              />
            </Container>
          </HStack>
           <HStack spacing={2} p="0.7em">
             <Container textAlign="left">
              <label style={{ color:"#888888" }}>
                <strong>Message</strong>
              </label>
              <Input 
              type="text"
              variant="outline" 
              {...register("message", { required: true })} 
              />
            </Container>
          </HStack>


          <HStack spacing={2} p="0.7em">
             <Container>
          <Box p="0 1em" w="100%">
            <Flex justifyContent="flex-start">
              <Checkbox 
                m="0 0.7em" 
                colorScheme='red'
                {...register("policy", { required: true })}
              >
                Acepto los terminos y condiciones.
              </Checkbox>
            </Flex>
          </Box>
          </Container>
         </HStack> 
          <Box p="2em 0.7em" w="100%">
            <Flex justifyContent="space-evenly">
              <Button colorScheme="facebook" variant="solid" type="submit">
                Enviar
              </Button>
            </Flex>
          </Box>
        </form>
     </StyledContact>
    </>
    );
}

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 0;
`;