import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { IFormInput, IList } from '../common/constants';
import { Path, UseFormRegister } from 'react-hook-form';

type IProps = {
  list: IList[];
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required?: boolean;
  onChange?: React.ReactEventHandler;
};

function SelectList({ list, register, label, required }: IProps) {
  return (
    <>
      <Select
        {...register(label, { required })}
        placeholder='Select option'
        size='xm'
        bg='#999999'
        color='#000000'
      >
        {Array.isArray(list) &&
          list.map((rol, index) => {
            return (
              <option key={index} value={rol.id}>
                {rol.name}
              </option>
            );
          })}
      </Select>
    </>
  );
}

export default SelectList;
