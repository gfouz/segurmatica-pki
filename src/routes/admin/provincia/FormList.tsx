import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import GetByName from '../common/GetByName';
import { Heading } from '@chakra-ui/react';

export interface IMsg {
  id: string;
  name: string;
}

const msg: IMsg = {
  id: 'Escriba nro de Id',
  name: 'Escriba un nombre de provincia.',
};

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='provincias' msg={msg.name} />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='provincias' queryKey='provincias' />,
  },
  {
    option: 'buscar',
    comp: <GetById url='provincias' queryKey='prov-id' msg={msg.id} />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='provinciasenabled' url='provincias/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='provincias' msg={msg.name} />,
  },
  {
    option: 'asociado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES!</Heading>,
  },
  {
    option: 'por nombre',
    comp: <GetByName path='provincias/name' allnames='provincias' queryKey='func_by_name' />,
  },
];
