import * as React from "react";
import { StyledRenewal } from "./Renewal.Styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { OnlyNumberInputProps, TextInputProps, IdRegisterRules } from "./constants";

interface IFormInput {
  //these are also! nominals for register props.
  id: string;
  dn: string;
  renewal: string;
  revocation: string;
  motive: string;
  policy: string;
}

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

export default function Resgister() {
  const [color, setColor] = React.useState("#666666");
  const [alert, setAlert] = React.useState("");
  const [radio, setRadio] = React.useState("renewal");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  function eventHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    let { value } = evt.target;
    let items = value.length;
    items && items === 11 ? setColor("#66CC00") : setAlert("Validos 11 números");
    items && items > 11 ? setColor("#ff0000") : setAlert("Complete 11 numeros");
    items && items < 11 ? setColor("#CCCCCC") : setAlert("Número excedido de 11");
  }
  return (
    <>
      <StyledRenewal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center w="100%" p="1.5em">
            <Heading as="h3" size="lg" color="#B22222">Solicitud:</Heading>
          </Center>
          <Center w="100%" p="0.3em 0">
            <Text color="#666666">Tipo de solicitud:</Text>
          </Center>

          <RadioGroup onChange={setRadio} value={radio} w="100%">
            <Box p="0 0.7em" w="100%">
              <Flex justifyContent="space-evenly">
                <Radio
                  m="0 1em"
                  value="renewal"
                  colorScheme='red'
                  isChecked={radio == "renewal" ? true : false}
                >
                  Renovación
                </Radio>
                <Radio
                  m="0 1em"
                  value="revocation"
                  colorScheme='red'
                  isChecked={radio == "natural" ? true : false}
                >
                  Revocación
                </Radio>
              </Flex>
            </Box>
          </RadioGroup>


          <HStack spacing={2} p="0.7em">
            <Container>
              <label style={{ color: `${color}` }}>
                <strong>Nro de ID</strong>
              </label>
              <Input
                {...OnlyNumberInputProps}
                _placeholder={{ color: errors.id ? "red.400" : "#666666" }}
                placeholder={errors.id ? "Valido 11 dígitos" : " "}
                {...register("id", {
                  ...IdRegisterRules,
                  onChange: (e) => eventHandler(e)
                })}
              />
            </Container>
            <Container>
              <label>Nro de Serie o DN</label>
              <Input
                {...OnlyNumberInputProps}
                _placeholder={{ color: errors.dn ? "red.400" : "gray.500" }}
                placeholder={errors.dn ? "Olvido su DN!" : ""}
                {...register("dn", { required: true })}
              />
            </Container>
          </HStack>

          {radio == "revocation" && (
            <>

              <Box p="2em 0.7em" w="100%">
                <Flex justifyContent="space-evenly">
                  <Input
                    m="0 0.7em"
                    {...TextInputProps}
                    _placeholder={{
                      color: errors.motive ? "red.400" : "gray.500",
                    }}
                    placeholder={
                      errors.motive ? "Motivo de Revocación!" : "Escriba Motivo de Revocación"
                    }
                    {...register("motive", { required: true })}
                  />
                </Flex>
              </Box>
            </>
          )}


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
      </StyledRenewal>
    </>
  );
}
