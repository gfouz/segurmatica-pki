import * as React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import store from '../common/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import StatusHandler from '../common/StatusHandler';
import { useMutation, useQuery } from 'react-query';
import { HStack, Input, Container } from '@chakra-ui/react';
import { getRequestEnabled, putRequestById, file_type } from '../common/constants';
import { IFormInput, number_type, text_type } from '../common/constants';
import { numbersList, tip } from './constants';
import SuggestedWords from './SuggestedWords';
import SubmitButton from '../common/SubmitButton';
import SelectList from './Select';

function Updater() {
  const snap = useSnapshot(store);
  const { stack } = snap;
  const [status, setStatus] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const users_enabled = '/users/enabled/true';
  const enterprises = '/empresas-instituciones/';
  const user_agent = 'representantes';
  const { data: users } = useQuery('users-enabled', () => getRequestEnabled(users_enabled));
  const { data: company } = useQuery('companies', () => getRequestEnabled(enterprises));

  const response = useMutation((formdata: IFormInput) => putRequestById(formdata, user_agent, stack.id));
  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    response.mutateAsync(formdata);
    console.log(formdata);
  };

  return (
    <>
      <StyledUpdater>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack p='1em'>
            <Container>
              <HStack>
                <label htmlFor='representatives'>
                  <p className='form-title'>Actulizar representante:</p>
                </label>
              </HStack>
              <label htmlFor='representatives'>
                <strong className='input-label'>Escriba el CI del representante</strong>
              </label>
              <SuggestedWords listname='representantes' message={tip.ci} datalist={numbersList}>
                <Input
                  list='representantes'
                  {...register('ci', { required: true })}
                  {...number_type}
                />
              </SuggestedWords>
              {errors.ci && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong className='input-label'>Escriba el tomo del representante</strong>
              </label>
              <SuggestedWords
                listname='representantes'
                message={tip.numbers}
                datalist={numbersList}
              >
                <Input
                  list='representantes'
                  {...register('tome', { required: true })}
                  {...number_type}
                />
              </SuggestedWords>
              {errors.tome && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong className='input-label'>Escriba el folio del representante</strong>
              </label>
              <SuggestedWords
                listname='representantes'
                message={tip.numbers}
                datalist={numbersList}
              >
                <Input
                  list='representantes'
                  {...register('folio', { required: true })}
                  {...number_type}
                />
              </SuggestedWords>
              {errors.folio && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong className='input-label'>Escriba el nombre del representante</strong>
              </label>
              <Input
                list='representantes'
                {...register('name', { required: true })}
                {...text_type}
              />
              {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong className='input-label'>Escriba el teléfono del representante</strong>
              </label>
              <SuggestedWords listname='representantes' message={tip.text} datalist={numbersList}>
                <Input
                  list='representantes'
                  {...register('phone', { required: true })}
                  {...text_type}
                />
              </SuggestedWords>
              {errors.phone && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong className='input-label'>Escriba el nombre del que lo nombra</strong>
              </label>
              <SuggestedWords listname='representantes' message={tip.text} datalist={numbersList}>
                <Input
                  list='representantes'
                  {...register('namer', { required: true })}
                  {...text_type}
                />
              </SuggestedWords>
              {errors.namer && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong className='input-label'>Escriba el cargo del que lo nombra</strong>
              </label>
              <SuggestedWords listname='representantes' message={tip.text} datalist={numbersList}>
                <Input
                  list='representantes'
                  {...register('namerCharge', { required: true })}
                  {...text_type}
                />
              </SuggestedWords>
              {errors.namerCharge && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong className='input-label'>Añada el documento del nombramiento</strong>
              </label>
              <SuggestedWords listname='representantes' message={tip.text} datalist={numbersList}>
                <Input list='representantes' {...register('patternName')} {...file_type} />
              </SuggestedWords>
              {errors.name && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>

          <HStack p='1em'>
            <Container>
              <label htmlFor='provinces'>
                <strong>Seleccione empresa o institución</strong>
              </label>
              <SelectList list={company?.result} label='eiId' register={register} required />
              {errors.eiId && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>

          <HStack p='1em'>
            <Container>
              <label htmlFor='representatives'>
                <strong>Selecciona al usuario al cual se vincula</strong>
              </label>
              <SelectList list={users?.result} label='userId' register={register} required />
              {errors.userId && <span style={{ color: 'red' }}>Field is required</span>}
            </Container>
          </HStack>
          <SubmitButton buttonstate={response?.isLoading} />

          {status && <StatusHandler message={status} />}
        </form>
      </StyledUpdater>
    </>
  );
}

export default Updater;

const StyledUpdater = styled.div`
  .input-label {
    color: #555555;
  }
  .form-title {
    color: #009966;
    margin: 2em 0;
    font-weight: bolder;
  }
`;
