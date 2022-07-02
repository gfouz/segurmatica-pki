import * as React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  USER,
  password_input,
  password_terms,
  text_input,
  user_terms,
  IFormInput,
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

const Form = () => {
  const [color, setColor] = React.useState("");
  const [alert, setAlert] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const [recatcha, setRecatcha] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = () =>
    console.log("these are errors");

  function eventHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    let { value } = evt.target;
    let items = value.length;
    items && items === 8 ? setColor("#66CC00") : setAlert("Validos 11 números");
    items && items > 8 ? setColor("#ff0000") : setAlert("Complete 11 numeros");
    items && items < 6
      ? setColor("#CCCCCC")
      : setAlert("Número excedido de 11");
  }
  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center w="100%" p="1.5em">
          <Heading as="h3" size="lg" color="#B22222">
            Inicio de sesión.{counter}
          </Heading>
        </Center>

        <HStack spacing={2} p="0.7em">
          <Container>
            <label style={{ color: `${color}` }}>
              <strong>Seleccione tipo de usuario.</strong>
            </label>
            <Select
              placeholder="Seleccione Adminstrador o cliente"
              {...register("usertype", { required: true })}
            >
              <Option data={USER} />
            </Select>
          </Container>
        </HStack>

        <HStack spacing={2} p="0.7em">
          <Container>
            <label style={{ color: `${color}` }}>
              <strong>Usuario</strong>
            </label>
            <ChakraInput
              label="user"
              register={register}
              htmlAttributes={text_input}
              idEvt={eventHandler}
              requirements={user_terms}
              placeholder={errors.user ? "Escriba su usuario!" : ""}
              _placeholder={{ color: errors.user ? "red.400" : "gray.500" }}
            />
          </Container>
        </HStack>
        <HStack>
          <Container>
            <label style={{ color: `${color}` }}>
              <strong>Contraseña</strong>
            </label>
            <ChakraInput
              label="password"
              register={register}
              htmlAttributes={showPassword ? text_input : password_input}
              idEvt={eventHandler}
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
            onClick = {()=> {setCounter((prev)=> prev + 1)}}
            >
              Continuar
            </Button>
            <Button colorScheme="red" variant="solid">
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
