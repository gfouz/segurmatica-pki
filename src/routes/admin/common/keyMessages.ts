interface IKeywords {
  ci: string;
  dn: string;
  motive: string;
  provincia: string;
  select: string;
}

export const keywords: IKeywords = {
  provincia: 'Escriba algún nombre de provincia.',
  ci: 'Solo 11 dígitos y ser mayor de 18!',
  dn: 'Número de serie es requerido!',
  motive: 'Motivo de revocación es requerido!',
  select: 'seleccione una opción',
};
