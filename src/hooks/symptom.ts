import useSWR from "swr"
import { fetcher } from "../utils/fetcher"

type SymptomType = {
    _id: string,
    symptomEn: string,
    symptomAr: string,
    createdAt: string,
}

export const useSymptoms = () => {
    const { data, isLoading } = useSWR('symptoms', fetcher)

    return {
        symptoms: data?.data as SymptomType[] ?? [],
        isLoading: isLoading && !data,
    }
}