export interface PropsForm {
  title?: string;
  children?: React.ReactNode;
  colorForm: string;
}

export interface PropsInput {
  title?: string;
  type: string;
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  checked?: boolean;
  setStateRadio?: Dispatch<SetStateAction<string[]>>;
}

export interface PropsSelect {
  title?: string;
  data?: Array<string>;
}

export interface PropsButton {
  type: submit | reset | button;
  name: string;
}

export type InputProps = {
  title: string;
  type: string;
  name?: string;
  value?: string;
  checked?: boolean;
  required: boolean;
  placeholder?: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
};

export interface IFormValues {
  "First Name": string;
  Age: number;
}
