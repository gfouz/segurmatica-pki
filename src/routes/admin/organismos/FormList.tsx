import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from '../common/Updater';
import Creator from '../common/Creator';
import { Heading } from '@chakra-ui/react';
import GetByName from '../common/GetByName';

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
    comp: <Creator url='organismos' />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='organismos' queryKey='all-organism' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='organismos' />,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='organismos-enabled' url='organismos/enabled/true' />,
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Updater url='organismos' />,
  },
];