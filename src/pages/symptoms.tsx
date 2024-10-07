import { mdiDoctor, mdiPlus } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Button from '../common/Button'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import { SymptomsTable } from '../components/Symptom/Symptoms'
import { AddSymptom } from '../components/Symptom/AddSymptom'

const SymptomsPage = () => {
    const [isModalAddActive, setIsModalAddActive] = useState(false);

    return (
        <>
            <Head>
                <title>{getPageTitle('Symptoms')}</title>
            </Head>
            <AddSymptom
                isModalAddActive={isModalAddActive}
                setIsModalAddActive={setIsModalAddActive}
            />
            <SectionMain>
                <SectionTitleLineWithButton icon={mdiDoctor} title="Symptoms" main>
                    <Button
                        onClick={() => { setIsModalAddActive(true) }}
                        target="_blank"
                        icon={mdiPlus}
                        label="New Symptom"
                        color="contrast"
                        roundedFull
                    />
                </SectionTitleLineWithButton>

                <CardBox className="mb-6" hasTable>
                    <SymptomsTable />
                </CardBox>

            </SectionMain>
        </>
    )
}

SymptomsPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default SymptomsPage
