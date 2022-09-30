import * as React from 'react';
import styled from 'styled-components';
import { Select } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../common/constants';

type IFormValues = {
  name: string;
  enabled: boolean;
  organismoId: number;
  municipioId: number;
};

type InputProps = {
  list: IFormInput[];
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  onChange: React.EventHandler<Event | any>;
};

function SelectList(props: InputProps) {
  const { list, register, label, required, onChange } = props;
  return (
    <>
      <Select
        {...register(label, { required })}
        placeholder='Select option'
        size='xm'
        onChange={onChange}
      >
        {Array.isArray(list) &&
          list.map((item, key) => {
            return (
              <option value={item.id} key={key}>
                <Span>{(item.email && item.email) || (item.name && item.name)}</Span>
              </option>
            );
          })}
      </Select>
    </>
  );
}

export default SelectList;

const Span = styled.p`
  color: green;
  text-transform: uppercase;
  font-weight: bolder;
`;
