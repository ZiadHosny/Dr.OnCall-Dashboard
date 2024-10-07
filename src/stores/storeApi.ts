import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { backendUrl } from '../envs'
import { parseCookies } from 'nookies'

const baseQuery = fetchBaseQuery({ baseUrl: backendUrl, headers: { authorization: `Bearer ${parseCookies()['token']}` } })
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['DrOnCall'],
    endpoints: () => ({})
})