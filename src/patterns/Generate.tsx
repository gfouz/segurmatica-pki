import * as React from "react";
import Option from "../components/Option";
import { StyledGenerate } from "./Generate.Styled";
import ChakraInput from '../components/input/ChakraInput';
import { idRequirements, onlyRequired, dates } from '../components/input/validations';
import {
  IFormInput,
  IdGenerationRules,
  initialState,
  green,
  red,
  grey,
  black,
} from "./constants";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ORGANISMOS,
  EMPRESAS,
  ENTIDADES,
  OnlyNumberInputProps,
  EmailInputProps,
  TextInputProps,
} from "./constants";

import {
  Box,
  Flex,
  Text,
  Radio,
  Input,
  HStack,
  Button,
  Center,
  Select,
  Checkbox,
  Heading,
  RadioGroup,
  Container,
} from "@chakra-ui/react";

export default function Generate() {
  const [state, setState] = React.useState(initialState);
  const [alert, setAlert] = React.useState("");
  const [radio, setRadio] = React.useState("juridica");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  function idEventHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    let { value } = evt.target;
    let length = value.length;
    setState((prev) => {
      return { ...prev, id: value };
    });

    length === 11 ? setState((prev) => green(prev)) : setAlert("warning");
    length > 11 ? setState((prev) => red(prev)) : setAlert("warning");
    length < 11 ? setState((prev) => grey(prev)) : setAlert("warning");
  }

  return (
    <>
      <StyledGenerate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center w="100%" p="1.5em">
            <Heading as="h3" size="lg" color="#B22222">
              Solicitud de Generación
            </Heading>
          </Center>
          <Center w="100%" p="0.3em 0">
            <Text color="#666666">Escriba sus datos correspondientes:</Text>
          </Center>
          <HStack spacing={2} p="0.7em">
            <Container>
              <label style={{ color: `${state.color}` }}>
                <strong>ID</strong>
              </label>
              <ChakraInput
                label="id"
                register={register}
                errors={errors}
                idEvt={idEventHandler}
                validations={dates}
                requirements={idRequirements}
                placeholder={errors.id ? "Olvido su ID!" : ""}
                _placeholder={{ color: errors.id ? "red.400" : "gray.500" }}
              />
            </Container>
            <Container>
              <label>Tomo</label>
              <ChakraInput
                label="tomo"
                register={register}
                errors={errors}
                idEvt={idEventHandler}
                requirements={onlyRequired}
                placeholder={errors.id ? "Olvido su ID!" : ""}
                _placeholder={{ color: errors.id ? "red.400" : "gray.500" }}
              />

            </Container>
            <Container>
              <label>Folio</label>
              <ChakraInput
                label="folio"
                register={register}
                errors={errors}
                idEvt={idEventHandler}
                requirements={onlyRequired}
                placeholder={errors.id ? "Olvido su ID!" : ""}
                _placeholder={{ color: errors.id ? "red.400" : "gray.500" }}
              />
            </Container>
          </HStack>
          <Box p="2em 0.7em" w="100%">
            <Flex justifyContent="space-evenly">
              <Input
                {...EmailInputProps}
                m="0 0.7em"
                _placeholder={{ color: errors.email ? "red.400" : "gray.500" }}
                placeholder={
                  errors.email ? "Email requerido!" : "Correo Electrónico"
                }
                {...register("email", { required: true })}
              />
              <Input
                m="0 0.7em"
                {...OnlyNumberInputProps}
                _placeholder={{ color: errors.tel ? "red.400" : "gray.500" }}
                placeholder={
                  errors.tel ? "Teléfono requerido!" : "Nro de Teléfono"
                }
                {...register("tel", { required: true })}
              />
            </Flex>
          </Box>
          <RadioGroup onChange={setRadio} value={radio} w="100%">
            <Box p="0 0.7em" w="100%">
              <Flex justifyContent="flex-start">
                <Radio
                  m="0 1em"
                  value="juridica"
                  colorScheme="red"
                  isChecked={radio == "juridica" ? true : false}
                >
                  Persona jurídica
                </Radio>
                <Radio
                  m="0 1em"
                  value="natural"
                  colorScheme="red"
                  isChecked={radio == "natural" ? true : false}
                >
                  Persona Natural
                </Radio>
              </Flex>
            </Box>
          </RadioGroup>
          {radio == "juridica" && (
            <>
              <Box p="2em 0.7em" w="100%">
                <Flex justifyContent="space-evenly">
                  <Select
                    m="0 0.7em"
                    placeholder="Organismos"
                    {...register("organismos")} //organismos
                  >
                    <Option data={ORGANISMOS} />
                  </Select>
                  <Select
                    m="0 0.7em"
                    placeholder="Empresa o Institución"
                    {...register("empresas")} //empresas
                  >
                    <Option data={EMPRESAS} />
                  </Select>
                </Flex>
              </Box>
              <Box p="2em 0.7em" w="100%">
                <Flex justifyContent="space-evenly">
                  <Input
                    m="0 0.7em"
                    {...TextInputProps}
                    _placeholder={{
                      color: errors.cargo ? "red.400" : "gray.500",
                    }}
                    placeholder={
                      errors.cargo ? "Olvido su Cargo!" : "Escribe tu cargo"
                    }
                    {...register("cargo", { required: true })}
                  />
                  <Input
                    m="0 0.7em"
                    {...TextInputProps}
                    _placeholder={{
                      color: errors.representante ? "red.400" : "gray.500",
                    }}
                    placeholder={
                      errors.representante
                        ? "Representante requerido!"
                        : "Representante"
                    }
                    {...register("representante", { required: true })}
                  />
                </Flex>
              </Box>
            </>
          )}
          {radio == "natural" && (
            <Box p="2em 0.7em" w="100%">
              <Flex justifyContent="space-evenly">
                <Select
                  placeholder="Entidad relacionada"
                  {...register("entidades")} //entidades
                >
                  <Option data={ENTIDADES} />
                </Select>
              </Flex>
            </Box>
          )}
          <Box p="0 1em" w="100%">
            <Flex justifyContent="flex-start">
              <Checkbox
                m="0 0.7em"
                colorScheme="red"
                {...register("condiciones")}
              >
                Acepto los terminos y condiciones.
              </Checkbox>
            </Flex>
          </Box>
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
      </StyledGenerate>
    </>
  );
}
