import { useMutation, useQueryClient } from "react-query";


export function useMutate(fn, key) {

  const queryClient = useQueryClient();

  return useMutation((data)=> fn(data), {

       onSuccess: (data) => {
         
         queryClient.setQueriesData([key], (prev) => {
           prev.concat(data)
          });
         queryClient.invalidateQueries(key);
        }
  });
}