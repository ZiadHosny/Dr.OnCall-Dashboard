import { SymptomInput } from "../../hooks/symptom"
import { Res } from "../../interfaces"
import { apiSlice } from "../storeApi"

const symptomApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        AddSymptom: builder.mutation<Res<SymptomInput>, SymptomInput>({
            query: (body) => {
                return {
                    url: `/symptoms`,
                    method: 'POST',
                    body,
                }
            },
        }),
        updateSymptom: builder.mutation<Res<SymptomInput>, { body: SymptomInput, id: string }>({
            query: ({ body, id }) => {
                return {
                    url: `/symptoms/${id}`,
                    method: 'PUT',
                    body,
                }
            },
        }),
        deleteSymptom: builder.mutation<Res<null>, string>({
            query: (id: string) => {
                return {
                    url: `/symptoms/${id}`,
                    method: 'DELETE',
                }
            },
        }),
    })
})

export const {
    useAddSymptomMutation,
    useUpdateSymptomMutation,
    useDeleteSymptomMutation,
} = symptomApiSlice