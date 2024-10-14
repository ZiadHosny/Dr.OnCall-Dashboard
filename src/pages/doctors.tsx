import { mdiDoctor, mdiPlus } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Button from '../common/Button'
import CardBox from '../common/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import { DoctorsTable } from '../components/Doctor/Doctors'

const DoctorsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Doctors')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiDoctor} title="Doctors" main>
          <Button
            href="doctors/add"
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
