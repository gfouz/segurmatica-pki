import * as React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

//MUTATIONS CUSTOM HOOK
export function useMutate(fn, key: string) {
  const queryClient = useQueryClient();
  return useMutation((data) => fn(data), {
    onSuccess: (data) => {
      queryClient.setQueriesData([key], (prev) => {
        prev.concat(data);
      });
      queryClient.invalidateQueries(key);
    },
  });
}

//CUSTOM HOOK TO FETCH DATA FROM SERVER.
export function useMyQuery(key, fn) {
  return useQuery(key, fn);
}

//CUSTOM HOOK TO FETCH DATA BY ID.
export function useMyQuery(key, fn, id) {
  return useQuery(key, fn);
}

//SIMPLE SWITCHER OF FOUR OPTIONS
export function useSwitch() {
  const [option, setOption] = React.useState('null');
  const setter = () => setOption('set');
  return [option, { setter }];
}

export const useBoolean = (initialState = false): [boolean, any] => {
  const [state, setState] = React.useState<boolean>(initialState);
  const toggle = React.useCallback((): void => setState((state) => !state), []);
  const close = React.useCallback((): void => setState(false), []);
  return [state, toggle, close];
};
