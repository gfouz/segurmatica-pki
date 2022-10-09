import GetEnabled from '../common/GetEnabled';
import Getter from '../common/Getter';
import Updater from './Updater';
import Creator from './Creator';
import GetByParams from '../common/GetByParams';
import GetByName from '../common/GetByName';

export interface IOptions {
  option: string;
  comp: React.ReactNode;
}

export const FormsList: IOptions[] = [
  {
    option: 'añadir',
    comp: <Creator url='funcionarios-registro' />,
  },
  {
    option: 'mostrar',
    comp: <Getter url='funcionarios-registro' queryKey='funcReg-all' />,
  },
  {
    option: 'buscar',
    comp: <GetByName allnames='funcionarios-registro'/>,
  },
  {
    option: 'habilitados',
    comp: <GetEnabled queryKey='funcReg-act' url='funcionarios-registro/enabled/true' />,
  },
  {
    option: 'actualizar',
    comp: <Updater url='funcionarios-registro' />,
  },
  {
    option: 'asociado',
    comp: (
      <GetByParams
        path='funcionarios-registro/entidad-registro'
        attached='entidades-registro'
        queryKey='func-reg'
      />
    ),
  },
  
];
