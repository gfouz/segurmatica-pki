import * as React from 'react';
import styled from 'styled-components';
import Select from './Select';
import StatusHandler from '../common/StatusHandler';
import ArrayIterator from '../common/ArrayIterator';
import { useQuery } from 'react-query';
import { getRequestAll, getRequestById, IFormInput } from '../common/constants';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../../userlogin/SubmitButton';
import { HStack, Container, Heading } from '@chakra-ui/react';

function GetByAssociation() {
  const [id, setId] = React.useState<string | undefined | number>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const url = 'provincias';
  const url2 = 'municipios/provincia'; //municipios por provincias
  const { data: list } = useQuery('provincias', () => getRequestAll(url));
  //const { data, isLoading, refetch } = useQuery('municipiosby', () => getRequestById(url2, id));

  const onSubmit: SubmitHandler<IFormInput> = async (formdata) => {
    setId(formdata.provinciaId);
  };
  React.useEffect(() => {
    // refetch();
  }, [id]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack p='1em'>
          <Container>
            <label htmlFor='municipios'>
              <Heading size='md' m='0.5em 0'>
                Municipios por Provincias
              </Heading>
            </label>
            <Select
              list={list?.result}
              label='provinciaId'
              register={register}
              required
            //onChange={(evt) => setId(evt.target.value)}
            />
            {errors.provinciaId && <span style={{ color: 'red' }}>Field is required</span>}
          </Container>
        </HStack>
        <HStack>
          {/* <SubmitButton buttonstate={response?.isLoading} /> */}
        </HStack>
      </form>
      {/* <ArrayIterator data={data?.result} /> */}

      {/* {status && <StatusHandler message={status} />} */}
    </>
  );
}

export default GetByAssociation;

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
