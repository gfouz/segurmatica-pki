import * as React from 'react';
import { StyledForm } from './Form.Styled';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ChakraInput from '../../components/input/ChakraInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  dates,
  tooltips,
  ci_terms,
  dn_terms,
  IFormInput,
  alertMessage,
  number_type,
  text_type,
  motive_terms,
} from '../constants';

import { Box, Flex, HStack, Button, Center, Checkbox, Heading, Container } from '@chakra-ui/react';

export default function Form() {
  const [radio, setRadio] = React.useState('renewal');
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
          <Center w='100%' p='1.5em'>
            <Heading as='h3' size='lg' color='#B22222'>
              Revocación
            </Heading>
          </Center>

          <HStack p='1em'>
            <Container>
              <label style={{ color: errors.id ? 'red' : '#222222' }}>
                <strong className='input__label'>Nro de ID</strong>
              </label>
              <ChakraInput
                label='id'
                message={tooltips.ci}
                register={register}
                validations={dates}
                htmlAttributes={number_type}
                requirements={ci_terms}
                placeholder={errors.id && 'Escriba Nro de CI!'}
                _placeholder={{ color: errors.id && 'red.400' }}
              />
            </Container>
            <Container>
              <label style={{ color: errors.dn ? 'red' : '#222222' }}>
                <strong>Nro de Serie</strong>
              </label>
              <ChakraInput
                label='dn'
                message={tooltips.dn}
                register={register}
                htmlAttributes={number_type}
                requirements={dn_terms}
                placeholder={errors.dn && 'Escriba Nro de DN!'}
                _placeholder={{ color: errors.dn && 'red.400' }}
              />
            </Container>
          </HStack>

          <HStack p='1em'>
            <Container>
              <label className='input__label'>Motivo de revocación</label>
              <ChakraInput
                label='motive'
                message={tooltips.motive}
                register={register}
                htmlAttributes={text_type}
                requirements={motive_terms}
                placeholder={errors.motive && 'Escriba motivo de revocación!'}
                _placeholder={{ color: errors.motive && 'red.400' }}
              />
            </Container>
          </HStack>

          <HStack p='1em'>
            <Checkbox
              style={{ border: '#444444' }}
              m='0 0.7em'
              colorScheme='red'
              {...register('policy', { required: true })}
            >
              <Link to='/terminos'>
                <span className='checkbox__label'> Acepto los terminos y condiciones.</span>
              </Link>
            </Checkbox>
          </HStack>

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
      </StyledForm>
    </>
  );
}
