import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IList, IFormInput } from './constants';

type InputProps = {
  list: IList[];
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required: boolean;
  onChange: React.ReactEventHandler;
};

function SelectList(props: InputProps) {
  const { list, register, label, required, onChange } = props;
  return (
    <>
      <Select
        {...register(label, { required })}
        placeholder='Select option'
        size='xm'
        color='#000000'
        onChange={onChange}
      >
        {Array.isArray(list) &&
          list.map((item, key) => {
            const keys = Object.keys(item);
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
