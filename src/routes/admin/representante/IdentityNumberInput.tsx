import * as React from 'react';
import { Tooltip } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import ErrorWarning from '../common/ErrorWarning';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from './constants';

let year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
year = parseInt(year.toString().substring(2, 4));

type InputProps = {
  errors: object;
  required?: boolean;
  info?: string;
  defaultValue?: any;
  register: UseFormRegister<IFormInput>;
};

const IdentityNumberInput = ({ register, errors, defaultValue, info }: InputProps) => {

  return (
    <>
      <Tooltip label='campo requerido de 11 dígitos' hasArrow arrowSize={15}>
        <Input
          size='sm'
          type='number'
          cursor= 'pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register('ci', {
            required: true,
            validate: {
              isOlder: (ci: string) => year - parseInt(ci.substring(0, 2)) == 18
                && month > parseInt(ci.substring(2, 4)) ||
                year > parseInt(ci.substring(0, 2))
                && year - parseInt(ci.substring(0, 2)) > 18 ||
                year < parseInt(ci.substring(0, 2))
                &&  parseInt(ci.substring(0, 2)) < 99,
              min_month: (ci: string) => parseInt(ci.substring(2, 4)) >= 1,
              max_month: (ci: string) => parseInt(ci.substring(2, 4)) <= 12,
              min_day: (ci: string) => parseInt(ci.substring(4, 6)) >= 1,
              max_day: (ci: string) => parseInt(ci.substring(4, 6)) <= 31,
            },
            minLength: 11,
            maxLength: 11,
          })}
        />
      </Tooltip>
      <ErrorWarning label='ci' errors={errors} info={info} />
    </>
  );
};

export default IdentityNumberInput;


/*isOlder: (ci: string) => year - parseInt(ci.substring(0, 2)) == 18
                && month > parseInt(ci.substring(2, 4)) ||
                year > parseInt(ci.substring(0, 2))
                && year - parseInt(ci.substring(0, 2)) > 18 ||
                year < parseInt(ci.substring(0, 2))
                &&  parseInt(ci.substring(0, 2)) < 99,


              max_month: (ci: string) => parseInt(ci.substring(2, 4)) <= 12,
              min_day: (ci: string) => parseInt(ci.substring(4, 6)) >= 1,
              max_day: (ci: string) => parseInt(ci.substring(4, 6)) >= 31, */