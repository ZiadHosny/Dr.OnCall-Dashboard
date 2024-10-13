import { Field, Form, Formik } from 'formik'
import FormField from '../../common/Form/Field'
import { useAddSymptomMutation } from '../../stores/api/symptomSlice'
import CardBoxModal from '../CardBox/Modal'
import { Dispatch, SetStateAction } from 'react'
import { SymptomInput, SymptomSchema } from './symptom.interface'
import { areAllFieldsTouched } from '../../utils/validation'

type Props = {
  isModalAddActive: boolean
  setIsModalAddActive: Dispatch<SetStateAction<boolean>>
}

export const AddSymptom = ({ isModalAddActive, setIsModalAddActive }: Props) => {
  const [addSymptom] = useAddSymptomMutation()

  const initialValues: SymptomInput = {
    symptomAr: '',
    symptomEn: '',
  }

  // Add
  const handleModalAddActionConfirm = async (formValues: SymptomInput) => {
    await addSymptom({
      symptomAr: formValues.symptomAr,
      symptomEn: formValues.symptomEn,
    })
    handleModalAddActionCancel()
  }

  const handleModalAddActionCancel = () => {
    setIsModalAddActive(false)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={SymptomSchema} onSubmit={() => {}}>
      {({ values, handleChange, handleBlur, errors, touched, isValid, setTouched, resetForm }) => (
        <CardBoxModal
          title="Add Symptom"
          buttonColor="info"
          buttonLabel="Done"
          isActive={isModalAddActive}
          onConfirm={() => {
            if (isValid && areAllFieldsTouched(touched, initialValues)) {
              handleModalAddActionConfirm(values)
              resetForm()
            } else {
              setTouched({
                symptomAr: true,
                symptomEn: true,
              })
            }
          }}
          onCancel={() => {
            resetForm()
            handleModalAddActionCancel()
          }}
        >
          <Form>
            <FormField
              name={'symptomEn'}
              isError={errors.symptomEn}
              label="Symptom in English"
              help="Please enter Symptom in English"
            >
              <Field name="symptomEn" onChange={handleChange} onBlur={handleBlur} />
            </FormField>
            <FormField
              name={'symptomAr'}
              isError={errors.symptomAr}
              label="Symptom in Arabic"
              help="Please enter Symptom in Arabic"
            >
              <Field name="symptomAr" onChange={handleChange} onBlur={handleBlur} />
            </FormField>
          </Form>
        </CardBoxModal>
      )}
    </Formik>
  )
}
