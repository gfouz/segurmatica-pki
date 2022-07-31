import * as React from "react";
import axios from 'axios';
import { StyledForm } from "./Form.Styled";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import ChakraInput from "../../../components/input/ChakraInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "react-query";

import  {getProvinces, createProvince, IFormInput } from './types'
import {useMutate} from './useMutate';

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

   const queryClient = useQueryClient();

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  
  const [param, setParam] = React.useState('provincias');
  const [option, setOption] = React.useState('showall');
    
    const addProvince = useMutate(createProvince, 'provincias');
     const { data, isError, isLoading } = useQuery('provincias', ()=> getProvinces('provincias'))
     console.log(data)
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
       
       option == 'setProvince' && addProvince.mutateAsync(data)
       console.log(addProvince.variables)
  }
  
    return (
      <>
        <StyledForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center w="100%" p="1.5em">
            <Heading as="h4" size="md" >
              ADMINISTRAR PROVINCIAS
            </Heading>
          </Center>
          <Center w="100%" p="1.5em">
            <Heading as="h6" size="sm">
               SELECCIONE UNA OPCIÓN
            </Heading>
          </Center>
          <Box  w="100%">
            <Flex justifyContent="space-evenly" >
              <Button colorScheme='green' size='sm' onClick={()=> setOption('setProvince')}>
                Áñadir Provincia.
              </Button>
              <Button colorScheme='green' size='sm' onClick={()=> setOption('getProvince')}>
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
                label="name"
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
                label="name"
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
        <Box  w="100%" p="3em">   
         <Button colorScheme='telegram' size='sm' type='submit'>
                Enviar
         </Button>
        </Box>  
        </form>
        
        
         
      </StyledForm>
    </>  
    )
}




/*
const addProvince = useMutation((data)=> createProvince(data),
        {
            onSuccess: (data) => {

                queryClient.invalidateQueries('provincias');
            },
        }
    );
    
*/