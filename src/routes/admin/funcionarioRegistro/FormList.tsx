import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from './Updater';
import Creator from './Creator';
import GetByParams from '../common/GetByParams';
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
    comp: <Creator url='funcionarios-registro' />,
  },
  {
    option: 'mostrar',
    icon: <SearchPlus />,
    comp: <Getter url='funcionarios-registro' queryKey='funcReg-all' />,
  },
  {
    option: 'buscar',
    icon: <Search />,
    comp: <GetByName allnames='funcionarios-registro'/>,
    
  },
  {
    option: 'habilitados',
    icon: <Rocket />,
    comp: <GetEnabled queryKey='funcReg-act' url='funcionarios-registro/enabled/true' />,
  },
  {
    option: 'asociado',
    icon: <CodeBranch />,
    comp: (
      <GetByParams
        path='funcionarios-registro/entidad-registro'
        attached='entidades-registro'
        queryKey='func-reg'
      />
    ),
  },
  {
    option: 'actualizar',
    icon: <Edit />,
    comp: <Updater url='funcionarios-registro' />,
  },
];

