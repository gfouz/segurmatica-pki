import * as React from "react";
import axios from 'axios';
import { StyledForm } from "./Form.Styled";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import ChakraInput from "../../../components/input/ChakraInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { 
  dates,
  tooltips, 
  ci_terms,
  dn_terms,
  alertMessage,
  number_type,
  text_type,
  motive_terms, 
  provinces
} from "../../constants";

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

//----FORM COMPONENT TO HANDLE PROVINCES.----
export default function Form() {
  interface IFormInput {
    getProvince: string;
    setProvince: string;
  }
  const [list, setList] = React.useState([]);
  const [option, setOption] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  alertMessage(errors, toast);

  function set(option: string) {

    setOption(option)
  }


  
  function getProvinces  (data) {
    console.log(data);
   axios.get('http://localhost:5000/provincias')
       .then(function (response) {
        let {data:[item]} = response;
        let name = item.name;
        //setList([...list, {name}]);
        setList([item]);
  })
       .catch(function (error) {
       console.log(error);
  });
  }
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
      option == 'showAll' && getProvinces(data);
  }

  return (
    <>
      <StyledForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center w="100%" p="1.5em">
            <Heading as="h4" size="md" color="#666666">
              ADMINISTRAR PROVINCIAS
            </Heading>
          </Center>
          <Center w="100%" p="1.5em">
            <Heading as="h6" size="sm" color="#666666">
               SELECCIONE UNA OPCIÓN
            </Heading>
          </Center>
          <Box  w="100%">
            <Flex justifyContent="space-evenly" >
              <Button colorScheme='pink' size='sm' onClick={()=> set('setProvince')}>
                Áñadir Provincia.
              </Button>
              <Button colorScheme='pink' size='sm' onClick={()=> set('getProvince')}>
                Buscar Provincia.
              </Button>
              
            </Flex>
          </Box>

        { option == "getProvince" && (
            <>
          <HStack  p="1em">
            <Container >
              <label htmlFor="provinces">
                <strong className="input__label">Buscar una provincia.</strong>
              </label>
              <ChakraInput
                list="provinces"
                datalist={provinces}
                label="getProvinces"
                message={tooltips.province}
                register={register}
                htmlAttributes={text_type}
                placeholder={
                  errors.provinces && "Escriba Nro de CI!" 
                }
                _placeholder={{ color: errors.id && "red.400" }}
              />  
              
            </Container>
          </HStack>
          </>
           )}

         { option == "setProvince" && (
          <>
          <HStack  p="1em">
            <Container >
              <label htmlFor="provinces">
                <strong className="input__label input__label--red">
                   Añadir una provincia.
                </strong>
              </label>
              <ChakraInput
                list="provinces"
                datalist={provinces}
                label="setProvince"
                message={tooltips.province}
                register={register}
                htmlAttributes={text_type}
                placeholder={
                  errors.provinces && "Escriba Nro de CI!" 
                }
                _placeholder={{ color: errors.id && "red.400" }}
              />  
              
            </Container>
          </HStack>

         </> 
        )}


          <Box p="5em 0 0 0" w="100%" mb="4em">
            <Flex justifyContent="space-evenly">
              <Button 
                colorScheme='twitter' 
                size='sm'
                type="submit"
                onClick={()=> set('showAll')}
                >
                MOSTRAR TODAS LAS PROVINCIAS.
              </Button>
            </Flex>
          </Box>
        </form>
        {
          list !== null && list.map((item)=> item.name)
        }
      </StyledForm>
    </>
  );
}
