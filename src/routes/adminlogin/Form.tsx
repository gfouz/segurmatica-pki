import * as React from "react";
import { useMutation } from "react-query";
import { toast} from 'react-toastify';
import { getToken } from '../asyncfunctions/asyncFunctions'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  USER,
  password_input,
  password_terms,
  text_input,
  user_terms,
  IFormInput,
  toastProps,
  infoMessage
} from "./constants";
import ChakraInput from "../../components/input/ChakraInput";
import Eye from "../../icons/Eye";
import EyeSlash from "../../icons/EyeSlashIcon";
import Option from "../../components/Option";
import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  Select,
  Checkbox,
  Heading,
  Container,
} from "@chakra-ui/react";


const url: string = "http://localhost:4000/login";

const initialState = {
  user: "",
  password: ""
}

//personalizar los toast.

const Form = () => {

  const navigate = useNavigate();
  const [counter, setCounter] = React.useState(0);
  const [params, setParams] = React.useState(initialState);
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  
  const auth = localStorage.getItem("auth");
  const {
    data: token, 
    mutation , 
    mutateAsync , 
    isLoading , 
    isError,      
    isSuccess} = useMutation((value)=>getToken(value));
    /*useMutation receive data from form and calls an acync function
    that excute axios to send a post request to the server.*/
  
  React.useEffect(()=>{
      auth && toast.success("Login successful!", {...toastProps})
      
  }, [auth])

  infoMessage(errors, toast);
  
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
      mutateAsync(data);
      localStorage.setItem("auth", token);
      console.log(token)
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center w="100%" p="1.5em">
          <Heading as="h3" size="lg" color="#B22222">
            Inicio de sesión.
          </Heading>
        </Center>

        <HStack spacing={2} p="0.7em">
          <Container>
            <label >
              <strong>Seleccione tipo de usuario.</strong>
            </label>
            <Select
              placeholder="Seleccione Administrador o cliente"
              {...register("usertype", { required: true })}
            >
              <Option data={USER} />
            </Select>
          </Container>
        </HStack>

        <HStack spacing={2} p="0.7em">
          <Container>
            <label style={{ color: `${color}` }}>
              <strong style={{color: errors.user && "red"}}>
                 Usuario
              </strong>
            </label>
            <ChakraInput
              label="user"
              register={register}
              htmlAttributes={text_input}
              requirements={user_terms}
              placeholder={errors.user ? "Escriba su usuario!" : ""}
              _placeholder={{ color: errors.user ? "red.400" : "gray.500" }}
            />
          </Container>
        </HStack>
        <HStack>
          <Container>
            <label style={{ color: `${color}` }}>
              <strong style={{color: errors.password && "red"}}>
                Contraseña
              </strong>
            </label>
            <ChakraInput
              label="password"
              register={register}
              htmlAttributes={showPassword ? text_input : password_input}
              requirements={password_terms}
              placeholder={errors.password ? "Olvido su contraseña!" : ""}
              _placeholder={{ color: errors.password ? "red.400" : "gray.500" }}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye /> : <EyeSlash />}
            </button>
          </Container>
        </HStack>

        <Box p="0 1em" w="100%">
          <Flex justifyContent="flex-start">
            <Checkbox
              m="1em"
              colorScheme="red"
              {...register("terms", { required: true })}
            >
              Acepto los terminos y condiciones.
            </Checkbox>
          </Flex>
        </Box>
        <Box p="2em 0.7em" w="100%">
          <Flex justifyContent="space-evenly">
            <Button
              type="submit"
              variant="solid"
              colorScheme="facebook"
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
            >
              Continuar
            </Button>
            <Button 
              colorScheme="red" 
              variant="solid" >
              Cancelar
            </Button>
          </Flex>
        </Box>
      </form>
    </StyledForm>
  );
};
export default Form;
const StyledForm = styled.div`
  max-width: 500px;
  border: 1px solid #cccccc;
  border-radius: 15px;
`;

