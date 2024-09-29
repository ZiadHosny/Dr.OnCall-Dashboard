import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { backendUrl } from '../envs'

const baseQuery = fetchBaseQuery({ baseUrl: backendUrl })
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['DrOnCall'],
    endpoints: () => ({})
})