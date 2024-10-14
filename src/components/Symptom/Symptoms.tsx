import { mdiEye, mdiTrashCan, mdiPencil } from '@mdi/js'
import Button from '../../common/Button'
import Buttons from '../../common/Buttons'
import ZTable from '../../common/Table/Table'
import { useSymptoms } from '../../hooks/symptom'
import { useState } from 'react'
import { EditSymptom } from './EditSymptom'
import { DialogDetails } from '../../common/Dialog/DialogDetails'
import { SymptomType } from './symptom.interface'
import { DialogDelete } from '../../common/Dialog/DialogDelete'
import { useDeleteSymptomMutation } from '../../stores/api/symptomSlice'

const tableHeads = ['Symptom In English', 'Symptom In Arabic', 'Created At']

export const SymptomsTable = () => {
  const [page, setPage] = useState(1)
  const [limit, _setLimit] = useState(10)
  const { symptoms, paginationInfo } = useSymptoms({ limit, page })
  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)
  const [isModalEditActive, setIsModalEditActive] = useState(false)
  const [currentSymptom, setCurrentSymptom] = useState<SymptomType>(null)
  const [deleteSymptom] = useDeleteSymptomMutation()

  const TableBody = () => {
    return (
      <>
        {currentSymptom && (
          <EditSymptom
            isActive={isModalEditActive}
            setIsActive={setIsModalEditActive}
            values={currentSymptom}
          />
        )}
        {currentSymptom && (
          <DialogDelete
            isActive={isModalTrashActive}
            setIsActive={setIsModalTrashActive}
            id={currentSymptom._id}
            name={currentSymptom.symptomEn}
            title={'Symptom'}
            deleteFn={deleteSymptom}
          />
        )}
        {currentSymptom && (
          <DialogDetails
            title="Symptom Details"
            isActive={isModalInfoActive}
            setIsActive={setIsModalInfoActive}
            values={{
              Id: currentSymptom._id,
              'Symptom In English': currentSymptom.symptomEn,
              'Symptom In Arabic': currentSymptom.symptomAr,
              'Created At': currentSymptom.createdAt,
            }}
          />
        )}
        {symptoms?.map((symptom) => (
          <tr key={symptom._id}>
            <td data-label="symptomEn">{symptom.symptomEn}</td>
            <td data-label="symptomAr">{symptom.symptomAr}</td>
            <td data-label="CreatedAt">{symptom.createdAt}</td>

            <td className="before:hidden lg:w-1 whitespace-nowrap">
              <Buttons type="justify-start lg:justify-end" noWrap>
                <Button
                  color="info"
                  icon={mdiEye}
                  onClick={() => {
                    setCurrentSymptom(symptom)
                    setIsModalInfoActive(true)
                  }}
                  small
                />
                <Button
                  color="warning"
                  icon={mdiPencil}
                  onClick={() => {
                    setCurrentSymptom(symptom)
                    setIsModalEditActive(true)
                  }}
                  small
                />
                <Button
                  color="danger"
                  icon={mdiTrashCan}
                  onClick={() => {
                    setCurrentSymptom(symptom)
                    setIsModalTrashActive(true)
                  }}
                  small
                />
              </Buttons>
            </td>
          </tr>
        ))}
      </>
    )
  }

  return (
    <ZTable
      tableHeads={tableHeads}
      page={page}
      setPage={setPage}
      tableBody={<TableBody />}
      paginationInfo={paginationInfo}
    />
  )
}
