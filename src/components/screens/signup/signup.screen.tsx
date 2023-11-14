import { useRouter } from 'next/navigation'

import { FC, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Form } from '@/components/layout'
import { AuthScreen } from '@/components/layout/auth-screen/auth-screen.layout'

import { ErrorHelper } from '@/components/shared'

import { FormHelper, PrimaryButton, TextField } from '@/components/ui'

import { SignUpSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { ErrorResponse, TSignUpCredentials } from '@/shared/types'

import { useSignUpMutation } from '@/store/api'

import { SignUpFieldsList } from './signup-screen.data'

export const SignUp: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')

  const methods = useConfiguredForm<TSignUpCredentials>(SignUpSchema)

  const [signUp, { data, error, isLoading }] = useSignUpMutation()

  const router = useRouter()

  const submitHandler: SubmitHandler<TSignUpCredentials> = payload => {
    const { firstName, lastName, login, email, password } = payload

    signUp({
      firstName,
      lastName,
      login,
      email,
      password,
    })
  }

  useEffect(() => {
    if (!data) return

    router.push('/dashboard')
  }, [data, router])

  useEffect(() => {
    if (!error) return

    const { data } = error as ErrorResponse

    if (data.message) {
      setErrorMessage(data.message)
    } else {
      setErrorMessage('')
    }
  }, [error, methods])

  return (
    <AuthScreen
      homeUrl="/login"
      heading="Sign Up"
      slots={{
        helpers: (
          <FormHelper
            label="Already have an account?"
            link={{ href: '/login', label: 'Sign In' }}
          />
        ),
      }}
    >
      {errorMessage && <ErrorHelper>{errorMessage}</ErrorHelper>}

      <Form<TSignUpCredentials>
        methods={methods}
        onSubmit={submitHandler}
        className="auth-form"
      >
        {SignUpFieldsList.map((props, idx) => (
          <TextField<TSignUpCredentials> key={idx} {...props} />
        ))}

        <PrimaryButton type="submit" isLoading={isLoading} className="mt-3">
          Sign Up
        </PrimaryButton>
      </Form>
    </AuthScreen>
  )
}
