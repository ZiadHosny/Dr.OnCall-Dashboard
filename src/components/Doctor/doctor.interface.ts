import * as Yup from 'yup'

export type DoctorType = {
  _id: string
  user: {
    name: string
    email: string
    password: string
    phone: string
  }
  imageUrl: string
  specialty: string
  rating: number
  userRating: number | null
  createdAt: string
}

export type DoctorInput = {
  name: string
  email: string
  password: string
  phone: string
}

export const DoctorSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  phone: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
})
