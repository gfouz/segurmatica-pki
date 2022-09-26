import { Heading } from '@chakra-ui/react';
import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import GetByName from '../common/GetByName';
import GetByTwoAssociations from './GetByTwoAssociations';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='empresas-instituciones' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='empresas-instituciones' queryKey='emp-inst-all' />,
  },
  {
    option: 'buscar',
    comp: <GetById url='empresas-instituciones' queryKey='emp-inst-id' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='emp-inst-act' url='empresas-instituciones/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='empresas-instituciones' />,
  },
  {
    option: 'asociado',
    comp: <GetByTwoAssociations />,
  },
  {
    option: 'asociado habilitado',
    comp: <Heading size='md'>NO EXISTEN ASOCIACIONES !</Heading>,
  },
  {
    option: 'por nombre',
    comp: (
      <GetByName
        path='empresas-instituciones/name'
        allnames='empresas-instituciones'
        queryKey='emp-by-name'
      />
    ),
  },
];
