import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import { Heading } from '@chakra-ui/react';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='provincias' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='provincias' queryKey='provincias' />,
  },
  {
    option: 'buscar',
    comp: <GetById url='provincias' queryKey='provinciaid' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='provinciasenabled' url='provincias/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: (
      <Updater url='provincias' />
    ),
  },
  {
    option: 'asociado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES!</Heading>,
  },
  {
    option: 'asociado habilitado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES !</Heading>,
  },
];
