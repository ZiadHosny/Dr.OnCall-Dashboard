import { useFetch } from "./useFetch"

export type SymptomType = {
    _id: string,
    symptomEn: string,
    symptomAr: string,
    createdAt: string,
}

export type SymptomInput = {
    symptomEn: string,
    symptomAr: string,
}

export const useSymptoms = () => {
    const symptoms = useFetch<SymptomType[]>('symptoms');
    return {
        symptoms: symptoms ?? [],
    }
}