import * as Yup from 'yup'

export type SymptomType = {
  _id: string
  symptomEn: string
  symptomAr: string
  createdAt: string
}

export type SymptomInput = {
  symptomEn: string
  symptomAr: string
}

export const SymptomSchema = Yup.object().shape({
  symptomEn: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  symptomAr: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
})
