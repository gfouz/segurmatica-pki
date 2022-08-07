import create from 'zustand';

const useStore = create(set => ({
  option: 'mostrar',
  setOption: (option) => set(state => ({option})),
}))

export const useBooleanStore = create(set => ({
   bool: false,
   setBoolean: (bool)=> set(state => ({bool: !state.bool}))
}))


export const useCardStore = useStore;

//Data list for input component autocomplete.
export const provinces = [
  "Pinar del Río",
  "Habana",
  "Matanzas",
  "Ciego de Ávila",
  "Ciefuegos",
  "Camaguey",
  "Las Tunas",
  "Holguin",
  "Granma",
  "Santiago",
  "Guantanamo",
];
export const IDS = ["1","2","3","4","5","6","7","8","9","10","11","123456789"];

interface ITooltip {
  ci: string;
  dn: string;
  motive: string;
  provincia: string;
}
export const tooltip: ITooltip = {
  provincia: "Escriba algún nombre de provincia.",
  ci: "Solo 11 dígitos y ser mayor de 18!",
  dn: "Número de serie es requerido!",
  motive: "Motivo de revocación es requerido!",
};





/*-----------css styles and Chakra attributes types.--------*/
export type chakraProps = {
  size: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs"> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<
        (string & {}) | "outline" | "flushed" | "unstyled" | "filled"
      >
    | undefined;
};
// HTML AND CHAKRA ATTRIBUTES
export const number_type: chakraProps = {
  size: "sm",
  type: "number",
  variant: "flushed",
};