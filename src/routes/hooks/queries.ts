import { useQuery } from "react-query";
import { auth } from "../promises/middleware";
type URL = string;
const key: string = "auth";
interface IParams {
  user?: string;
  password?: string;
}

export function useAuth(url: URL, params: IParams) {
  return useQuery([key], () => auth(url, params));
}
