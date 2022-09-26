import { Heading } from '@chakra-ui/react';
import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Update from './Updater';
import Creator from '../common/Creator';
import GetByAssociation from './GetByAssociation';
import GetByAssociationEnabled from './GetByAssociationEnabled';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='municipios' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='municipios' queryKey='all-municipios' />,
  },
  {
    option: 'buscar',
    comp: <GetById url='municipios' queryKey='municipios-id' />,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='mun-enabled' url='municipios/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Update url='municipios' />,
  },
  {
    option: 'asociado',
    comp: <GetByAssociation />,
  },
  {
    option: 'asociado habilitado',
    comp: <GetByAssociationEnabled />,
  },
  {
    option: 'por nombre',
    comp: <Heading size='md'>NO DISPONIBLE!</Heading>,
  },
];
