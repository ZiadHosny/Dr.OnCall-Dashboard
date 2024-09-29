import { mdiEye, mdiTrashCan } from '@mdi/js'
import { useDoctors } from '../../hooks/doctor'
import Button from '../Button'
import Buttons from '../Buttons'
import ZTable from "../Table/Table"
import UserAvatar from '../UserAvatar'

const tableHeads = [
    'Name',
    'Email',
    'Password',
    'Phone',
    'Image',
    'Specialty',
    'createdAt',
]

const perPage = 5


export const DoctorsTable = () => {
    const { doctors } = useDoctors()

    const TableBody = () => {
        return (
            <>
                {
                    doctors.map((doctor) => (
                        <tr key={doctor._id}>
                            <td className="border-b-0 lg:w-6 before:hidden">
                                <UserAvatar username={doctor.user.name} className="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
                            </td>
                            <td data-label="Name">{doctor.user.name}</td>
                            <td data-label="Email">{doctor.user.email}</td>
                            <td data-label="Password">{'sss'}</td>
                            <td data-label="Phone"> {doctor.user.phone} </td>
                            <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                                <small className="text-gray-500 dark:text-slate-400">{'image'}</small>
                            </td>
                            <td data-label="Specialty"> {doctor.specialty} </td>
                            <td data-label="CreatedAt"> {doctor.createdAt} </td>

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
