import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IList, IFormInput } from '../common/constants';

type InputProps = {
  list: IList[];
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required: boolean;
  onChange?: React.ReactEventHandler;
};
function SelectList(props: InputProps) {
  const { list, register, label, required } = props;
  return (
    <>
      <Select
        {...register(label, { required })}
        placeholder='Select option'
        size='xm'
        bg='#999999'
        color='#000000'
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
