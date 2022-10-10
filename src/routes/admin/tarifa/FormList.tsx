import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Update from './Updater';
import GetByName from '../common/GetByName';
import Creator from './Create';
import { Heading } from '@chakra-ui/react';

import { IListProps } from '../common/constants';
import Edit from '../common/icons/Edit';
import Rocket from '../common/icons/Rocket'
import Search from '../common/icons/Search';
import FileAlt from '../common/icons/FileAlt';
import CodeBranch from '../common/icons/CodeBranch';
import SearchPlus from '../common/icons/SearchPlus';

export const FormsList: IListProps[] = [
  {
    option: 'añadir',
    icon: <Edit />,
    comp: <Creator url='tarifas' />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='tarifas' queryKey='all-tarifas' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='tarifas' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled url='tarifas/enabled/true' queryKey='tarifas-active' />,
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Update url='tarifas' />,
  },
];