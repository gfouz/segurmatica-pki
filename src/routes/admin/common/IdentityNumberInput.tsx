import * as React from 'react';
import { Tooltip } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import ErrorWarning from '../common/ErrorWarning';
import { Path, UseFormRegister } from 'react-hook-form';

export type IFormInput = {
  id: string;
  ci: string;
  eiId: string;
  userId: string;
  name: string;
  tome: string;
  folio: string;
  phone: string;
  namer: string;
  enabled: string;
  namerCharge: string;
  nominationTemplate: string;
};

let year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
year = parseInt(year.toString().substring(2, 4));

type InputProps = {
  errors: object;
  required?: boolean;
  info?: string;
  defaultValue?: any;
  label: Path<IFormInput>
  register: UseFormRegister<IFormInput>;
};

const IdentityNumberInput = ({ label, register, errors, defaultValue, info }: InputProps) => {

  return (
    <>
      <Tooltip label='campo requerido de 11 dígitos' hasArrow arrowSize={15}>
        <Input
          size='sm'
          type='number'
          cursor='pointer'
          variant='flushed'
          defaultValue={defaultValue}
          {...register(label, {
            required: true,
            validate: {
              isOlder: (ci: string) =>
                (year - parseInt(ci.substring(0, 2)) == 18 &&
                  month > parseInt(ci.substring(2, 4))) ||
                (year > parseInt(ci.substring(0, 2)) && year - parseInt(ci.substring(0, 2)) > 18) ||
                (year < parseInt(ci.substring(0, 2)) && parseInt(ci.substring(0, 2)) < 99),
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

