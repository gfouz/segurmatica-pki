import * as React from "react";
import { StyledForm } from "./Form.Styled";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import ChakraInput from "../../components/input/ChakraInput";

import { 
  dates,
  ci_terms,
  dn_terms,
  tooltips, 
  IFormInput,
  number_type,
  alertMessage
} from "../constants";



import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  Checkbox,
  Heading,
  Container,
} from "@chakra-ui/react";

export default function Form() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  alertMessage(errors, toast);
  
  return (
    <>
      <StyledForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center w="100%" p="1.5em">
            <Heading as="h3" size="lg" color="#B22222">
              Renovación
            </Heading>
          </Center>
          <HStack  p="2em">
            <Container>
              <label style={{ color: errors.id ? "red" : "#222222" }}>
                <strong>Nro de ID</strong>
              </label>

            <ChakraInput
                label="id"
                message={tooltips.ci}
                register={register}
                validations={dates}
                htmlAttributes={number_type}
                requirements={ci_terms}
                placeholder={
                  errors.id && "Escriba Nro de CI!"
                }
                _placeholder={{ color: errors.id && "red.400" }}
              />  

              
            </Container>
            <Container>
              <label style={{ color: errors.dn ? "red" : "#222222" }}>
                <strong className="input__label">Nro de Serie</strong>
              </label>
            <ChakraInput
                label="dn"
                message={tooltips.dn}
                register={register}
                htmlAttributes={number_type}
                requirements={dn_terms}
                placeholder={
                  errors.dn && "Escriba Nro de DN!"
                }
                _placeholder={{ color: errors.dn && "red.400" }}
              />  
            </Container>
          </HStack>

            <HStack p="2em">
              <Checkbox
                style={{border:"#444444"}}
                m="0 0.7em"
                colorScheme="red"
                {...register("policy", { required: true })}
              >
               <Link to="/terminos">
                <Heading className="checkbox__link"> Acepto los terminos y condiciones.</Heading>
               </Link> 
              </Checkbox>
            </HStack>

          <Box p="2em 0.7em" w="100%">
            <Flex justifyContent="space-evenly">
              <Button colorScheme="facebook" variant="solid" type="submit">
                Continuar
              </Button>
              <Button colorScheme="red" variant="solid">
                Cancelar
              </Button>
            </Flex>
          </Box>
        </form>
      </StyledForm>
    </>
  );
}
