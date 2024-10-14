import { Dispatch, SetStateAction } from 'react'
import CardBoxModal from '../CardBox/Modal'

type Props = {
  id: string
  name: string
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  deleteFn: (id: string) => void
  title: string
}

export const DialogDelete = ({ title, deleteFn, id, name, isActive, setIsActive }: Props) => {
  // Delete
  const handleModalConfirm = async () => {
    await deleteFn(id)
    handleModalCancel()
  }

  const handleModalCancel = () => {
    setIsActive(false)
  }

  return (
    <CardBoxModal
      title="Please confirm Delete"
      buttonColor="danger"
      buttonLabel="Confirm"
      isActive={isActive}
      onConfirm={handleModalConfirm}
      onCancel={handleModalCancel}
    >
      <p>
        Are You Want To Delete {title} <b>{id}</b>
      </p>
      <p>
        with name <b>{name}</b>
      </p>
    </CardBoxModal>
  )
}
