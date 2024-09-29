import { backendUrl } from "../envs";

export const fetcher = (url: string) => fetch(`${backendUrl}/${url}`).then((res) => res.json())
