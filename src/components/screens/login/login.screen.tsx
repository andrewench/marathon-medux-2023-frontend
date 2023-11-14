'use client'

import { useRouter } from 'next/navigation'

import { FC, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Form } from '@/components/layout'
import { AuthScreen } from '@/components/layout/auth-screen/auth-screen.layout'

import { ErrorHelper } from '@/components/shared'

import { FormHelper, PrimaryButton, TextField } from '@/components/ui'

import { SignInSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { ErrorResponse, type TSignInCredentials } from '@/shared/types'

import { useLoginMutation } from '@/store/api'

export const Login: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')

  const methods = useConfiguredForm<TSignInCredentials>(SignInSchema)

  const router = useRouter()

  const [loginUser, { data, error }] = useLoginMutation()

  const submitHandler: SubmitHandler<TSignInCredentials> = payload => {
    loginUser(payload)
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
  }, [error])

  return (
    <AuthScreen
      homeUrl="/login"
      heading="Sign In"
      slots={{
        helpers: (
          <FormHelper
            label="Don't have an account?"
            link={{ href: '/signup', label: 'Sign up' }}
          />
        ),
      }}
    >
      {errorMessage && <ErrorHelper>{errorMessage}</ErrorHelper>}

      <Form<TSignInCredentials>
        methods={methods}
        onSubmit={submitHandler}
        className="auth-form"
      >
        <TextField<TSignInCredentials>
          field="login"
          label="Username or Email Address"
          placeholder="Enter username or Email Address"
          type="text"
        />

        <TextField<TSignInCredentials>
          field="password"
          label="Password"
          placeholder="Enter Password"
          type="password"
        />

        <PrimaryButton type="submit" className="mt-3">
          Sign In
        </PrimaryButton>
      </Form>
    </AuthScreen>
  )
}
