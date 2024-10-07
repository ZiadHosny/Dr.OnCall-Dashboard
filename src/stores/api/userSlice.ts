import { Res } from "../../interfaces"
import { apiSlice } from "../storeApi"

export type LoginProps = {
    email: string,
    password: string,
}

export type LoginData = {
    token: string,
    user: {
        name: string,
        email: string,
    },
}

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<Res<LoginData>, LoginProps>({
            query: (body: LoginProps) => {
                return {
                    url: `/users/login`,
                    method: 'POST',
                    body: body,
                }
            },
        }),
    })
})

export const {
    useLoginMutation,
} = userApiSlice