import { mdiEye, mdiTrashCan } from '@mdi/js'
import { useDoctors } from '../../hooks/doctor'
import Button from '../../common/Button'
import Buttons from '../../common/Buttons'
import ZTable from "../Table/Table"
import UserAvatar from '../UserAvatar'
import { useSymptoms } from '../../hooks/symptom'

const tableHeads = [
    'Symptom In English',
    'Symptom In Arabic',
    'CreatedAt'
]

const perPage = 5


export const SymptomsTable = () => {
    const { symptoms } = useSymptoms()

    const TableBody = () => {
        return (
            <>
                {
                    symptoms.map((symptom) => (
                        <tr key={symptom._id}>
                            <td className="border-b-0 lg:w-6 before:hidden">
                                <UserAvatar username={symptom.symptomEn} className="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
                            </td>
                            <td data-label="symptomEn">{symptom.symptomEn}</td>
                            <td data-label="symptomAr">{symptom.symptomAr}</td>
                            <td data-label="CreatedAt"> {symptom.createdAt} </td>

                            <td className="before:hidden lg:w-1 whitespace-nowrap">
                                <Buttons type="justify-start lg:justify-end" noWrap>
                                    <Button
                                        color="info"
                                        icon={mdiEye}
                                        onClick={() => setIsModalInfoActive(true)}
                                        small
                                    />
                                    <Button
                                        color="danger"
                                        icon={mdiTrashCan}
                                        // onClick={() => setIsModalTrashActive(true)}
                                        small
                                    />
                                </Buttons>
                            </td>
                        </tr>
                    ))
                }
            </>
        )
    }


    return (
        <ZTable tableHeads={tableHeads} perPage={perPage} tableBody={<TableBody />} />
    )
}
