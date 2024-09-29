import type { ReactElement } from 'react'
import Head from 'next/head'
import Button from '../common/Button'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/Form/Field'
import FormCheckRadio from '../components/Form/CheckRadio'
import Divider from '../common/Divider'
import Buttons from '../common/Buttons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'
import { useLoginMutation } from '../stores/api/userSlice'

type LoginForm = {
  email: string
  password: string
  remember: boolean
}

const LoginPage = () => {
  const router = useRouter()
  const [login, { isLoading }] = useLoginMutation()

  const handleSubmit = async (formValues: LoginForm) => {
    await login({
      body: {
        email: formValues.email,
        password: formValues.password,
      }
    });
    // router.push('/dashboard')
    console.log('Form values', formValues)
  }

  const initialValues: LoginForm = {
    email: 'john.doe@email.com',
    password: 'bG1sL9eQ1uD2sK3b',
    remember: true,
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField label="Email" help="Please enter your Email">
                <Field name="email" />
              </FormField>

              <FormField label="Password" help="Please enter your Password">
                <Field name="password" type="password" />
              </FormField>

              <FormCheckRadio type="checkbox" label="Remember">
                <Field type="checkbox" name="remember" />
              </FormCheckRadio>

              <Divider />

              <Buttons>
                <Button type="submit" label="Login" color="info" />
                <Button href="/" label="Home" color="info" outline />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default LoginPage
