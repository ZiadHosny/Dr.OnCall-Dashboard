import { apiSlice } from "../storeApi"

export type LoginProps = {
    email: string,
    password: string,
}


const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ body }: { body: LoginProps }) => {
                return {
                    url: `/users/login`,
                    method: 'POST',
                    body,
                }
            }
        }),
    })
})

export const {
    useLoginMutation,
} = userApiSlice