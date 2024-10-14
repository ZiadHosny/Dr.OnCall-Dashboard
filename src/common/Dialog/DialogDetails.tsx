import React, { Dispatch, SetStateAction } from 'react'
import CardBoxModal from '../CardBox/Modal'

type Props = {
  title: string
  values: object
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const DialogDetails = ({ title, values, isActive, setIsActive }: Props) => {
  // Info
  const handleModalInfoActionCancel = () => {
    setIsActive(false)
  }

  return (
    <CardBoxModal
      title={title}
      buttonColor="info"
      isActive={isActive}
      onCancel={handleModalInfoActionCancel}
    >
      {Object.keys(values).map((e) => (
        <div key={e} className="w-full break-words">
          {e} : <span className="font-bold text-blue-500">{values[e]}</span>
        </div>
      ))}
    </CardBoxModal>
  )
}
