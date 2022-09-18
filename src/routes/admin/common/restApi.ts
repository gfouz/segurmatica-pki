interface IToastOptions {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  toastId: number;
}
export const toastProps: IToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  toastId: 1,
};

export function requestInfo(query: any, toast: any) {
  query.status == 'loading' && toast.warning('Buscando información!', { ...toastProps });
  query.status == 'error' && toast.warning('sucedio algún problema!', { ...toastProps });
}
