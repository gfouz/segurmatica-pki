import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import GetByName from '../common/GetByName';
import { Heading } from '@chakra-ui/react';

import { IListProps } from '../common/constants';
import Edit from '../common/icons/Edit';
import Rocket from '../common/icons/Rocket'
import Search from '../common/icons/Search';
import FileAlt from '../common/icons/FileAlt';
import CodeBranch from '../common/icons/CodeBranch';
import SearchPlus from '../common/icons/SearchPlus';

export interface IMsg {
  id: string;
  name: string;
}

const msg: IMsg = {
  id: 'Escriba nro de Id',
  name: 'Escriba un nombre de provincia.',
};

export const FormsList: IListProps[] = [
  {
    option: 'añadir',
    icon: <Edit />,
    comp: <Creator url='provincias' msg={msg.name} />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='provincias' queryKey='provincias' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='provincias' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='provincias-enabled' url='provincias/enabled/true' />,
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Updater url='provincias' msg={msg.name} />,
  },
];