import { backendUrl } from "../envs";
import { parseCookies } from 'nookies'

export const fetcher = async (url: string) => {
    const token = parseCookies()['token']
    return fetch(`${backendUrl}/${url}`, { headers: { authorization: `Bearer ${token}` } }).then((res) => res.json())
}
