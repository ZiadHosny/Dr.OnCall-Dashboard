import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Button from '../common/Button'
import CardBox from '../common/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import LayoutGuest from '../layouts/Guest'
import { getPageTitle } from '../config'

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Error')}</title>
      </Head>

      <SectionFullScreen bg="pinkRed">
        <CardBox
          className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
          footer={<Button href="/" label="Done" color="danger" />}
        >
          <div className="space-y-3">
            <h1 className="text-2xl">Unhandled exception</h1>

            <p>An Error Occurred</p>
          </div>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default ErrorPage
