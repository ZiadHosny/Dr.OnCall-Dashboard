import { GetProps } from '../interfaces'
import { useGetSymptomsQuery } from '../stores/api/symptomSlice'

export const useSymptoms = (getProps: GetProps) => {
  const { data: symptomsRes } = useGetSymptomsQuery(getProps)

  return {
    symptoms: symptomsRes?.data ?? [],
    paginationInfo: symptomsRes?.paginationInfo,
  }
}
