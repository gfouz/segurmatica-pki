import * as React from 'react';
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
        {list &&
          list.map((item, key) => {
            const keys = Object.keys(item);
            return (
              <option key={key} value={item.id}>
                <span style={{ color: '#444444' }}>{item.email || item.name}</span>
              </option>
            );
          })}
      </Select>
    </>
  );
}

export default SelectList;
