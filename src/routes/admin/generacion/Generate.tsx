import * as React from 'react';
import styled from 'styled-components';
import StyledLabel from '../common/StyledLabel';
import TelInput from './TelInput';
import IntegerInput from './IntegerInput';
import IdentityNumberInput from './IdentityNumberInput';
import EmailInput from './EmailInput';
import TextInput from './TextInput';
import ErrorWarning from '../common/ErrorWarning';
import { IFormInput } from './constants';
import { info, postRequest, getRequestEnabled } from '../common/constants';
import { InfoIcon } from '@chakra-ui/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { HStack, Center } from '@chakra-ui/react';
import { Box, Flex, Radio, Input } from '@chakra-ui/react';
import { Tooltip, Checkbox, IconButton } from '@chakra-ui/react';
import { RadioGroup, Container, useDisclosure } from '@chakra-ui/react';
import { useMutation, useQuery } from 'react-query';
import SelectList from './Select';
import SelectNative from './NativeSelect';
import SubmitButton from '../common/SubmitButton';
import StatusHandler from '../common/StatusHandler';
import { Link } from 'react-router-dom';

export default function Generate() {
  
  const [status, setStatus] = React.useState('');
  const [radio, setRadio] = React.useState('juridica');
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const entity = '/entidades-registro/enabled/true';
  const { data: entities } = useQuery('entities-all', () => getRequestEnabled(entity));

  const agent = '/representantes/enabled/true';
  const { data: agents } = useQuery('agents-all', () => getRequestEnabled(agent));

  const organismos = '/organismos/enabled/true';
  const { data: org } = useQuery('org-all', () => getRequestEnabled(organismos));

  const enterprises = '/empresas-instituciones/';
  const { data: companies } = useQuery('companies', () => getRequestEnabled(enterprises));

  const url = '';
  const response = useMutation((formdata: IFormInput) => postRequest(url, formdata));

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const message = response?.data?.message;

  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);

  

  return (
    <>
      <StyledGenerate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction='column' p='1em'>
            <StyledLabel color='#009966' upper center m='1em 0 2em 0'>
              Generación
            </StyledLabel>

            <StyledLabel  m='1em 0 0 0'>
              Número de carnet de identidad
            </StyledLabel>
            <IdentityNumberInput register={register} errors={errors} info={info.ci} />
            <StyledLabel  m='1em 0 0 0'>
              Tomo de documento
            </StyledLabel>
            <IntegerInput
              label='tome'
              register={register}
              errors={errors}
              info={info.tome}
              required
            />
            <StyledLabel m='1em 0 0 0'>
              Folio de documento
            </StyledLabel>
            <IntegerInput
              label='folio'
              register={register}
              errors={errors}
              info={info.folio}
              required
            />
            <StyledLabel m='1em 0 0 0'>
              Correo electrónico
            </StyledLabel>
            <EmailInput 
              register={register} 
              errors={errors} 
              info={info.email} 
              />
            <StyledLabel m='1em 0 0 0'>
              Teléfono
            </StyledLabel>
            <TelInput required label='phone' register={register} errors={errors} info={info.tel} />
            <RadioGroup onChange={setRadio} value={radio} w='100%'>
              <Box p='2em 0' w='100%'>
                <Flex justifyContent='flex-start'>
                  <Radio
                    value='juridica'
                    colorScheme='red'
                    isChecked={radio == 'juridica' ? true : false}
                  >
                    <b>Persona jurídica</b>
                  </Radio>
                  <Radio
                    m='0 0.5em'
                    value='natural'
                    colorScheme='red'
                    isChecked={radio == 'natural' ? true : false}
                  >
                    <b>Persona Natural</b>
                  </Radio>
                </Flex>
              </Box>
            </RadioGroup>
            {radio == 'juridica' && (
              <>
                <StyledLabel m='1em 0'>
                  Organismos
                </StyledLabel>
                <SelectList list={org?.result} label='organismos' register={register} required />
                <ErrorWarning label='organismos' errors={errors} m='0 2em' />

                <StyledLabel m='1em 0'>
                  Empresas o Institución
                </StyledLabel>

                <SelectList
                  list={companies?.result}
                  label='empresas'
                  register={register}
                  required
                />
                <ErrorWarning label='empresas' errors={errors} m='0 2em' />
                <StyledLabel m='1em 0'>
                   Cargo
                </StyledLabel>
                <TextInput 
                  label='cargo' 
                  register={register} 
                  errors={errors} 
                  info={info.tome} 
                  />
                <StyledLabel m='1em 0'>
                  Representante
                </StyledLabel>

                <SelectNative
                  register1={register}
                  list={agents?.result}
                  label='representante'
                  required
                />
                <ErrorWarning label='representante' errors={errors} m='0 2em' />
              </>
            )}
            {radio == 'natural' && (
              <Box>
                <StyledLabel m='1em 0' color='#009966'>
                  Entidad relacionada
                </StyledLabel>

                <SelectList
                  list={entities?.result}
                  label='entidades'
                  register={register}
                  required
                />
                <ErrorWarning label='entidades' errors={errors} m='0 2em' />
              </Box>
            )}
            {radio == 'natural' && (
              <>
                <Flex justifyContent='flex-start'>
                  <Checkbox m='0 0.7em' colorScheme='red' {...register('condiciones')}>
                    <StyledLabel m='1em 0'>Acepto los terminos y condiciones.</StyledLabel>
                  </Checkbox>
                </Flex>
                <Flex justify='center' m='2em 0'>
                  <Link to='/terminos'>
                    <StyledLabel color='#372381'>
                      Lea términos y condiciones
                    </StyledLabel>
                  </Link>
                </Flex>
              </>
            )}
            <SubmitButton buttonstate={response?.isLoading} />
            {status && <StatusHandler message={status} />}
          </Flex>
        </form>
      </StyledGenerate>
    </>
  );
}

export const StyledGenerate = styled.div`
  box-shadow: 1px 1px 10px black;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 2em 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    padding: 3em;
  }
  .label__name {
    color: #777777;
    white-space: nowrap;
  }
  .agent-info {
    display: none;
  }
  .agent-info:hover {
    display: block;
  }
`;
