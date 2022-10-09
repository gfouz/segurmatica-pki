import * as React from 'react';
import styled from 'styled-components';
import { Select } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormInput } from './constants';
import { getRequestById } from '../common/constants';
import StyledLabel from '../common/StyledLabel';
import { useQuery } from 'react-query';

type InputProps = {
  list: IFormInput[];
  label: Path<IFormInput>;
  register1: UseFormRegister<IFormInput>;
  required?: boolean;
};

function SelectNative(props: InputProps) {
  const { list, register1, label, required } = props;
  const [url, setUrl] = React.useState('');
  const [value, setValue] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  //const url1 = 'representantes';
  const { data, refetch } = useQuery('agent-id', () => getRequestById(url, value));

  const handleEvt = (evt: { target: { value: React.SetStateAction<string> } }) => {
    setValue(evt.target.value);
  };
  const handleButtonEvt = () => {
    setVisible((st) => !st);
  };

  React.useEffect(() => {
    setUrl('representantes');
    refetch();
  }, [value]);

  return (
    <StyledSelect>
      <Select
        {...register1(label, {
          required,
          onChange(evt) {
            handleEvt(evt);
          },
        })}
        placeholder='Select option'
        size='xm'
        color='#000000'
      >
        {Array.isArray(list) &&
          list?.map((item, key) => {
            return (
              <option key={item.id} value={item.id}>
                {(item.email && item.email) || (item.name && item.name)}
              </option>
            );
          })}
      </Select>
      <div className='written-label' onClick={handleButtonEvt} >
        <WrittenLabel 
          size='12px' 
          upper 
          color='#009966' 
          m='2em  0' 
          center
          >
          {visible ? 'Ocultar': 'Mostrar'} información del representante
        </WrittenLabel>
      </div>

      {visible && value && (
        <FurtherInfo>
          <p>Nombre: {data?.result?.name}</p>
          <p>Carnet: {data?.result?.ci}</p>
          <p>Tomo: {data?.result?.tome}</p>
          <p>Folio: {data?.result?.folio}</p>
          <p>Tel: {data?.result?.phone}</p>
        </FurtherInfo>
      )}
    </StyledSelect>
  );
}

export default SelectNative;

const StyledSelect = styled.div`
.written-label:hover {
    filter: drop-shadow(0 0 2em #009966);
    background-color: #000000;
    border-radius: 12px;
  }
`;

const FurtherInfo = styled.div`
  box-shadow: 1px 1px 10px black;
  border-radius: 12px;
  padding: 1em;
  color: #555555;
  font-weight: bolder;
  font-size: 14px;
`;
const WrittenLabel = styled(StyledLabel)`
   border: 1px solid #009966;
   padding: 1em;
   border-radius: 12px;
`;
