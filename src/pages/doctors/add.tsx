import { mdiPlus } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/Section/Main'
import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'
import { getPageTitle } from '../../config'
import { AddDoctor } from '../../components/Doctor/AddDoctor'

const AddDoctorPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Add Doctor')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiPlus}
          title="Add Doctor"
          main
        ></SectionTitleLineWithButton>
        <AddDoctor />
      </SectionMain>
    </>
  )
}

AddDoctorPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default AddDoctorPage
