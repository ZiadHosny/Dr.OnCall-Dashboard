import { Dispatch, SetStateAction } from 'react'
import CardBoxModal from '../CardBox/Modal'
import { useDeleteSymptomMutation } from '../../stores/api/symptomSlice'
import { SymptomType } from './symptom.interface'

type Props = {
  values: SymptomType
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const DeleteSymptom = ({ values, isActive, setIsActive }: Props) => {
  const [deleteSymptom] = useDeleteSymptomMutation()

  // Delete
  const handleModalDeleteActionConfirm = async () => {
    await deleteSymptom(values._id)
    handleModalDeleteActionCancel()
  }

  const handleModalDeleteActionCancel = () => {
    setIsActive(false)
  }

  return (
    <CardBoxModal
      title="Please confirm Delete"
      buttonColor="danger"
      buttonLabel="Confirm"
      isActive={isActive}
      onConfirm={handleModalDeleteActionConfirm}
      onCancel={handleModalDeleteActionCancel}
    >
      <p>
        Are You Want To Delete Symptom <b>{values._id}</b>
      </p>
      <p>
        with name <b>{values.symptomEn}</b>
      </p>
    </CardBoxModal>
  )
}
