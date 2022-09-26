import * as React from 'react';
import styled from 'styled-components';
import Select from './Select';
import StatusHandler from '../common/StatusHandler';
import ArrayIterator from '../common/ArrayIterator';
import { useQuery } from 'react-query';
import { getByDoubleAssociation } from './constants';
import { getRequestAll, IFormInput } from '../common/constants';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../../userlogin/SubmitButton';
import { HStack, Container, Heading, Flex } from '@chakra-ui/react';

export default function GetByTwoAssociations() {
  const [status, setStatus] = React.useState('');
  const [id1, setId1] = React.useState<string | number | undefined>('');
  const [id2, setId2] = React.useState<string | number | undefined>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url1 = 'municipios';
  const url2 = 'organismos';
  const main_url = '';
  const { data: municipios } = useQuery('all-mun', () => getRequestAll(url1));
  const { data: organismos } = useQuery('all-org', () => getRequestAll(url2));
  const { data, refetch } = useQuery('some-emp', () => getByDoubleAssociation(id1, id2));

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    console.log(data);
    setId1(formdata.id);
    setId2(formdata.id2);
  };
  React.useEffect(() => {
    refetch();
  }, [id1, id2]);

  const message = data?.message;
  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column' p='0.5em'>
          <Heading size='sm' m='0.5em 0'>
            Empresa e institución por municipio.
          </Heading>
          <Select label='id' list={municipios?.result} register={register} required />

          <Heading size='sm' m='0.5em 0'>
            Empresa o institución por organismo.
          </Heading>

          <Select label='id2' list={organismos?.result} register={register} required />

          <SubmitButton buttonstate={data?.isLoading} />
          <ArrayIterator data={data?.result} />
          {status && <StatusHandler message={status} />}
        </Flex>
      </form>
    </>
  );
}

const StrangeButton = styled.div`
  margin: 2em 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid #ab8ffe;
  border-radius: 10px;
  color: #222222;
  background-color: #ab8ffe;
`;
