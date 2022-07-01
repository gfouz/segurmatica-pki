import * as React from "react";
import Option from "../components/Option";
import { StyledGenerate } from "./Generate.Styled";
import ChakraInput from '../components/input/ChakraInput';
import ModalForm from "../components/ModalForm/ModalForm";
import { InfoIcon } from "@chakra-ui/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ORGANISMOS,
  EMPRESAS,
  ENTIDADES,
  REPRESENTANTES,
  IFormInput,
  initialState,
  color,
  inputType,
  dates,
  attributes
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
  Tooltip,
  Checkbox,
  Heading,
  IconButton,
  RadioGroup,
  Container,
  useDisclosure
} from "@chakra-ui/react";

export default function Generate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

    length === 11 ? setState((prev) => color.green(prev)) : setAlert("warning");
    length > 11 ? setState((prev) => color.red(prev)) : setAlert("warning");
    length < 11 ? setState((prev) => color.grey(prev)) : setAlert("warning");
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
          <HStack spacing={2} px="1em">
            <Container>
              <label style={{ color: `${state.color}` }}>
                <strong>ID</strong>
              </label>
              <ChakraInput
                label="id"
                register={register}
                htmlAttributes={inputType.number()}
                idEvt={idEventHandler}
                validations={dates}
                requirements={attributes.id()}
                placeholder={errors.id ? "Olvido su ID!" : "Escriba su ID"}
                _placeholder={{ color: errors.id ? "red.400" : "gray.500" }}
              />
            </Container>
            <Container>
              <label>
                <strong>Tomo</strong>
              </label>
              <ChakraInput
                label="tomo"
                register={register}
                htmlAttributes={inputType.number()}
                idEvt={idEventHandler}
                requirements={attributes.tomo()}
                placeholder={errors.id ? "Olvido su Tomo!" : "Escriba su Tomo"}
                _placeholder={{ color: errors.id ? "red.400" : "gray.500" }}
              />
            </Container>
            <Container>
              <label>
                <strong>Folio</strong>
              </label>
              <ChakraInput
                label="folio"
                register={register}
                htmlAttributes={inputType.number()}
                idEvt={idEventHandler}
                requirements={attributes.folio()}
                placeholder={
                  errors.id ? "Olvido su Folio!" : "Escriba su Folio"
                }
                _placeholder={{ color: errors.id ? "red.400" : "gray.500" }}
              />
            </Container>
          </HStack>
          <HStack spacing={2} px="1em">
            <Container p="2em 0.7em" w="100%">
              <label>
                <strong className="input-label">Correo Electrónico</strong>
              </label>
              <Input
                {...inputType.email}
                m="0 0.7em"
                _placeholder={{
                  color: errors.email ? "red.400" : "gray.500",
                }}
                placeholder={
                  errors.email
                    ? "Email requerido!"
                    : "Escriba su Correo Electrónico"
                }
                {...register("email", { required: true })}
              />
            </Container>
            <Container p="2em 0.7em" w="100%">
              <label>
                <strong>Teléfono</strong>
              </label>
              <ChakraInput
                label="tel"
                register={register}
                htmlAttributes={inputType.telephone()}
                idEvt={idEventHandler}
                requirements={attributes.tel()}
                placeholder={errors.id ? "Su télefono!" : "Escriba su teléfono"}
                _placeholder={{ color: errors.id ? "red.400" : "gray.500" }}
              />
            </Container>
          </HStack>

          <RadioGroup onChange={setRadio} value={radio} w="100%">
            <Box p="0 1.5em" w="100%">
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
              <HStack spacing={2} px="1em">
                <Container p="2em 0.7em" w="100%">
                  <label>
                    <strong className="input-label">Organismos</strong>
                  </label>
                  <Select
                    m="0 0.7em"
                    {...register("organismos")} //organismos
                  >
                    <Option data={ORGANISMOS} />
                  </Select>
                </Container>
                <Container p="2em 0.7em" w="100%">
                  <label>
                    <strong className="input-label">
                      Empresa o Institución
                    </strong>
                  </label>
                  <Select
                    m="0 0.7em"
                    {...register("empresas")} //empresas
                  >
                    <Option data={EMPRESAS} />
                  </Select>
                </Container>
              </HStack>
              <HStack spacing={5} px="1em">
                <Container p="2em 0.7em" w="100%">
                  <label>
                    <strong className="input-label">Cargo</strong>
                  </label>
                  <Input
                    m="0 0.7em"
                    {...inputType.text()}
                    _placeholder={{
                      color: errors.cargo ? "red.400" : "gray.500",
                    }}
                    placeholder={
                      errors.cargo ? "Olvido su Cargo!" : "Escribe tu cargo"
                    }
                    {...register("cargo", { required: true })}
                  />
                </Container>
                <Container p="2em 0.7em" w="100%">
                  <label>
                    <strong className="input-label">Representante</strong>
                  </label>
                  <Select
                    m="0 0.7em"
                    {...register("representante")} //organismos
                  >
                    <Option data={REPRESENTANTES} />
                  </Select>
                </Container>
                <Container p="2em 0.7em" w="100%">
                  <Tooltip
                    hasArrow
                    label="Datos del Representante"
                    shouldWrapChildren
                    mt="6"
                  >
                    <IconButton
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<InfoIcon />}
                      mt="1.5rem"
                      onClick={onOpen}
                    />
                  </Tooltip>
                </Container>
              </HStack>
              <ModalForm
                title="Datos del Representante"
                isOpen={isOpen}
                onClose={onClose}
              >
                <p>Nombre: ...</p> <p>Correo electrónico: ...</p>
                <p>Teléfono: ...</p> <p>Organismo: ...</p>
                <p>Empresa o Institución: ...</p>
              </ModalForm>
            </>
          )
          }
          {
            radio == "natural" && (
              <Box p="2em 1.7em" w="100%">
                <label>
                  <strong className="input-label">Entidad relacionada</strong>
                </label>
                <Flex justifyContent="space-evenly" px="0.7em">
                  <Select
                    {...register("entidades")} //entidades
                  >
                    <Option data={ENTIDADES} />
                  </Select>
                </Flex>
              </Box>
            )
          }
          {
            radio == "natural" && (
              <Box p="2em 1.7em" w="100%">
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
            )
          }
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
        </form >
      </StyledGenerate >
    </>
  );
}


