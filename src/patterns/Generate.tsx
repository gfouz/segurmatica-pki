import * as React from 'react';
import { toast } from 'react-toastify';
import Option from '../components/Option';
import { StyledGenerate } from './Generate.Styled';
import ChakraInput from '../components/input/ChakraInput';
import ModalForm from '../components/ModalForm/ModalForm';
import { InfoIcon } from '@chakra-ui/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  ORGANISMOS,
  EMPRESAS,
  ENTIDADES,
  REPRESENTANTES,
  IFormInput,
  initialState,
  dates,
  ci_terms,
  tomo_terms,
  folio_terms,
  tel_terms,
  email_terms,
  number_type,
  telephone_type,
  email_type,
  text_type,
  infoMessage,
  tooltips,
} from './constants';

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
  useDisclosure,
} from '@chakra-ui/react';

export default function Generate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = React.useState(initialState);
  const [alert, setAlert] = React.useState('');
  const [radio, setRadio] = React.useState('juridica');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  infoMessage(errors, toast);

  return (
    <>
      <StyledGenerate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Center w='100%' p='1.5em'>
            <Tooltip label='Escriba sus datos!' aria-label='A tooltip'>
              <Heading as='h3' size='lg' color='#B22222'>
                Solicitud de Generación
              </Heading>
            </Tooltip>
          </Center>
          <Center w='100%' p='0.3em 0'>
            <Text color='#666666'>Escriba sus datos correspondientes:</Text>
          </Center>
          <HStack spacing={2} px='1em'>
            <Container>
              <label className='label'>
                <strong className='label__name' style={{ color: errors.id ? 'red' : '#222222' }}>
                  CI
                </strong>
              </label>
              <ChakraInput
                label='id'
                message={tooltips.ci}
                register={register}
                validations={dates}
                htmlAttributes={number_type}
                requirements={ci_terms}
                placeholder={errors.id ? 'Escriba Nro de CI!' : 'Escriba su Nro de CI'}
                _placeholder={{ color: errors.id ? 'red.400' : 'gray.500' }}
              />
            </Container>
            <Container>
              <label className='label'>
                <strong className='label__name' style={{ color: errors.tomo ? 'red' : '#222222' }}>
                  Tomo
                </strong>
              </label>
              <ChakraInput
                label='tomo'
                message={tooltips.tomo}
                register={register}
                htmlAttributes={number_type}
                requirements={tomo_terms}
                placeholder={errors.tomo ? 'Olvido su Tomo!' : 'Escriba su Tomo'}
                _placeholder={{ color: errors.tomo ? 'red.400' : 'gray.500' }}
              />
            </Container>
            <Container>
              <label className='label'>
                <strong className='label__name' style={{ color: errors.folio ? 'red' : '#222222' }}>
                  Folio
                </strong>
              </label>
              <ChakraInput
                label='folio'
                message={tooltips.folio}
                register={register}
                htmlAttributes={number_type}
                requirements={folio_terms}
                placeholder={errors.folio ? 'Olvido su Folio!' : 'Escriba su Folio'}
                _placeholder={{ color: errors.folio && 'red.400' }}
              />
            </Container>
          </HStack>
          <HStack spacing={2} px='1em'>
            <Container p='2em 0.7em' w='100%'>
              <label className='label'>
                <strong className='label__name' style={{ color: errors.email && 'red' }}>
                  Correo Electrónico
                </strong>
              </label>

              <ChakraInput
                label='email'
                register={register}
                message={tooltips.email}
                htmlAttributes={email_type}
                requirements={email_terms}
                placeholder={errors.folio && 'Email requerido!'}
                _placeholder={{ color: errors.folio && 'red.400' }}
                pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
              />
            </Container>
            <Container p='2em 0.7em' w='100%'>
              <label className='label'>
                <strong className='label__name' style={{ color: errors.tel && 'red' }}>
                  Teléfono
                </strong>
              </label>
              <ChakraInput
                label='tel'
                register={register}
                message={tooltips.email}
                htmlAttributes={telephone_type}
                requirements={tel_terms}
                placeholder={errors.tel && 'Télefono requerido!'}
                _placeholder={{ color: errors.tel && 'red.400' }}
              />
            </Container>
          </HStack>

          <RadioGroup onChange={setRadio} value={radio} w='100%'>
            <Box p='0 1.5em' w='100%'>
              <Flex justifyContent='flex-start'>
                <Radio
                  m='0 1em'
                  value='juridica'
                  colorScheme='red'
                  isChecked={radio == 'juridica' ? true : false}
                >
                  Persona jurídica
                </Radio>
                <Radio
                  m='0 1em'
                  value='natural'
                  colorScheme='red'
                  isChecked={radio == 'natural' ? true : false}
                >
                  Persona Natural
                </Radio>
              </Flex>
            </Box>
          </RadioGroup>
          {radio == 'juridica' && (
            <>
              <HStack spacing={2} px='1em'>
                <Container p='2em 0.7em' w='100%'>
                  <label className='label'>
                    <strong className='label__name'>Organismos</strong>
                  </label>
                  <Select
                    m='0 0.7em'
                    {...register('organismos')} //organismos
                  >
                    <Option data={ORGANISMOS} />
                  </Select>
                </Container>
                <Container p='2em 0.7em' w='100%'>
                  <label className='label'>
                    <strong className='label__name'>Empresa o Institución</strong>
                  </label>
                  <Select m='0 0.7em' {...register('empresas')}>
                    <Option data={EMPRESAS} />
                  </Select>
                </Container>
              </HStack>
              <HStack spacing={5} px='1em'>
                <Container p='2em 0.7em' w='100%'>
                  <label className='label'>
                    <strong className='label__name'>Cargo</strong>
                  </label>
                  <Input
                    m='0 0.7em'
                    {...text_type}
                    _placeholder={{
                      color: errors.cargo ? 'red.400' : 'gray.500',
                    }}
                    placeholder={errors.cargo ? 'Olvido su Cargo!' : 'Escribe tu cargo'}
                    {...register('cargo', { required: true })}
                  />
                </Container>
              </HStack>

              <HStack spacing={5} px='1em'>
                <Container p='2em 0.7em' w='100%'>
                  <label className='label'>
                    <strong className='label__name'>Representante</strong>
                  </label>
                  <Select
                    m='0 0.7em'
                    {...register('representante')} //organismos
                  >
                    <Option data={REPRESENTANTES} />
                  </Select>
                </Container>
                <Container p='2em 0.7em' w='100%'>
                  <Tooltip hasArrow label='Datos del Representante' shouldWrapChildren mt='6'>
                    <IconButton
                      variant='outline'
                      colorScheme='teal'
                      aria-label='Call Sage'
                      fontSize='20px'
                      icon={<InfoIcon />}
                      m='1.5rem 0 0 2em'
                      onClick={onOpen}
                    />
                  </Tooltip>
                </Container>
              </HStack>

              <ModalForm title='Datos del Representante' isOpen={isOpen} onClose={onClose}>
                <p>Nombre: ...</p> <p>Correo electrónico: ...</p>
                <p>Teléfono: ...</p> <p>Organismo: ...</p>
                <p>Empresa o Institución: ...</p>
              </ModalForm>
            </>
          )}
          {radio == 'natural' && (
            <Box p='2em 1.7em' w='100%'>
              <label className='label'>
                <strong className='label__name'>Entidad relacionada</strong>
              </label>
              <Flex justifyContent='space-evenly' px='0.7em'>
                <Select
                  {...register('entidades')} //entidades
                >
                  <Option data={ENTIDADES} />
                </Select>
              </Flex>
            </Box>
          )}
          {radio == 'natural' && (
            <Box p='2em 1.7em' w='100%'>
              <Flex justifyContent='flex-start'>
                <Checkbox m='0 0.7em' colorScheme='red' {...register('condiciones')}>
                  Acepto los terminos y condiciones.
                </Checkbox>
              </Flex>
            </Box>
          )}
          <Box p='2em 0.7em' w='100%'>
            <Flex justifyContent='space-evenly'>
              <Button colorScheme='facebook' variant='solid' type='submit'>
                Continuar
              </Button>
              <Button colorScheme='red' variant='solid'>
                Cancelar
              </Button>
            </Flex>
          </Box>
        </form>
      </StyledGenerate>
    </>
  );
}
