import { Field, Form, Formik } from 'formik'
import FormField from '../../common/Form/Field'
import { useUpdateSymptomMutation } from '../../stores/api/symptomSlice'
import CardBoxModal from '../../common/CardBox/Modal'
import { Dispatch, SetStateAction } from 'react'
import { SymptomInput, SymptomSchema, SymptomType } from './symptom.interface'
import { isAnyFieldTouchedOrChanged } from '../../utils/validation'

type Props = {
  values: SymptomType
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const EditSymptom = ({ values, isActive, setIsActive }: Props) => {
  const [updateSymptom] = useUpdateSymptomMutation()

  const initialValues: SymptomInput = {
    symptomAr: values.symptomAr ?? '',
    symptomEn: values.symptomEn ?? '',
  }

  // Edit
  const handleModalEditActionConfirm = async (formValues: SymptomInput) => {
    await updateSymptom({
      id: values._id,
      body: {
        symptomAr: formValues.symptomAr,
        symptomEn: formValues.symptomEn,
      },
    })
    handleModalEditActionCancel()
  }

  const handleModalEditActionCancel = () => {
    setIsActive(false)
  }

  return (
    <Formik validationSchema={SymptomSchema} initialValues={initialValues} onSubmit={() => {}}>
      {({ values, handleChange, handleBlur, isValid, touched, errors }) => (
        <CardBoxModal
          title="Edit Symptom"
          buttonColor="warning"
          buttonLabel="Done"
          isActive={isActive}
          onConfirm={() => {
            if (isValid && isAnyFieldTouchedOrChanged(touched, values, initialValues)) {
              handleModalEditActionConfirm(values)
            }
          }}
          onCancel={handleModalEditActionCancel}
        >
          <Form>
            <FormField
              isError={errors.symptomEn}
              name="symptomEn"
              label="Symptom in English"
              help="Please enter Symptom in English"
            >
              <Field name="symptomEn" onChange={handleChange} onBlur={handleBlur} />
            </FormField>

            <FormField
              isError={errors.symptomAr}
              name="symptomAr"
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
