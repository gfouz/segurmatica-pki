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
    comp: <Creator url='entidades-registro' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='entidades-registro' queryKey='entidad-reg-all' />,
  },
  {
    option: 'buscar',
    comp: <GetById url='entidades-registro' queryKey='entidad-reg-id' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='ent-reg-active' url='entidades-registro/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='entidades-registro' />,
  },
  {
    option: 'asociado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES!</Heading>,
  },
  {
    option: 'asociado habilitado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES !</Heading>,
  },
  {
    option: 'por nombre',
    comp: <Heading size='md'>NO DISPONIBLE!</Heading>,
  },
];
