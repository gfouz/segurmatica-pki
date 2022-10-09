import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormInput } from './constants';

type InputProps = {
  list: IFormInput[];
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required?: boolean;
};

function SelectList(props: InputProps) {
  const { list, register, label, required } = props;

  return (
    <>
      <Select
        {...register(label, { required })}
        placeholder='Select option'
        size='xm'
        color='#000000'
      >
        {Array.isArray(list) &&
          list?.map((item, key) => {
            return (
              <option key={key} value={item.id}>
                {(item.email && item.email) || (item.name && item.name)}
              </option>
            );
          })}
      </Select>
    </>
  );
}

export default SelectList;

//  setItem?: React.Dispatch<React.SetStateAction<object>>
