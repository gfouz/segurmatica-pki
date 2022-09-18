import GetEnabled from '../common/GetEnabled';
import GetById from '../common/GetById';
import Getter from '../common/Getter';
import Updater from './Updater';
import Creator from './Creator';
import GetByParams from '../common/GetByParams';

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
    comp: <GetById url='funcionarios-registro' queryKey='funcReg-id' />,
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
    comp: <GetByParams path='funcionarios-registro/entidad-registro' queryKey='func-reg' />,
  },
  {
    option: 'asociado habilitado',
    comp: <p>AUN NO EXISTEN ASOCIACIONES !</p>,
  },
];
