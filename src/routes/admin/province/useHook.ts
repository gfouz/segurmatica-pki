import React from 'react'
import axios from 'axios'


// Reducer for hook state and actions
const reducer = (state, action) => {
  switch (action.type) {
    case "idle":
      return { status: "idle", data: undefined, error: undefined };
    case "loading":
      return { status: "loading", data: undefined, error: undefined };
    case "success":
      return { status: "success", data: action.payload, error: undefined };
    case "error":
      return { status: "error", data: undefined, error: action.payload };
    default:
      throw new Error("invalid action");
  }
};


export default function useCreateProvince(query) {

const initialState = {
    status: query ? "loading" : "idle",
    data: undefined,
    error: undefined,
  };


  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true,
  })
  

const [state, dispatch] = React.useReducer(reducer, initialState);

  const mutate = React.useCallback(async (values) => {
    setState({ isLoading: true })
    try {
      const data = axios.post('/api/posts', values).then((res) => res.data)
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [])

  return [mutate, state]
}



  // Setup our state and actions
  const [state, dispatch] = useReducer(reducer, initialState);