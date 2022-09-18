import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { IFormInput } from '../common/constants';
import { Path, UseFormRegister } from 'react-hook-form';

type IFormValues = {
  rolid?: string;
  provinciaId?: string;
};
type IList = {
  id: number;
  name: string;
  rolid: number;
  enabled: boolean;
};
type TSelect = {
  list: IList[];
  label: Path<IFormValues>;
  register?: UseFormRegister<IFormInput>;
  required: boolean;
  onChange?: React.EventHandler<Event | any>;
};

function SelectList({ list, label, required, onChange, register }: TSelect) {
  return (
    <>
      <Select
        placeholder='Select option'
        size='xm'
        bg='#999999'
        color='#000000'
        onChange={onChange}
      >
        {list &&
          list.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
      </Select>
    </>
  );
}

export default SelectList;
