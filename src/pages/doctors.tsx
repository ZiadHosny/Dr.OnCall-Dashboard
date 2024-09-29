import { mdiDoctor, mdiPlus } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import Table from '../components/Table/Table'
import { DoctorsTable } from '../components/Doctor/Doctors'

const DoctorsPage = () => {
    const openNewDoctor = () => {
        console.log('ssssssssssss')
    }

    return (
        <>
            <Head>
                <title>{getPageTitle('Doctors')}</title>
            </Head>
            <SectionMain>
                <SectionTitleLineWithButton icon={mdiDoctor} title="Doctors" main>
                    <Button
                        onClick={openNewDoctor}
                        target="_blank"
                        icon={mdiPlus}
                        label="New Doctor"
                        color="contrast"
                        roundedFull
                    />
                </SectionTitleLineWithButton>

                <CardBox className="mb-6" hasTable>
                    <DoctorsTable />
                </CardBox>

            </SectionMain>
        </>
    )
}

DoctorsPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DoctorsPage
