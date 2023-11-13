'use client'

import { useRouter } from 'next/navigation'

import { FC, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Form } from '@/components/layout'
import { AuthScreen } from '@/components/layout/auth-screen/auth-screen.layout'

import { FormHelper, PrimaryButton, TextField } from '@/components/ui'

import { SignInSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { type TSignInCredentials } from '@/shared/types'

import { useLoginMutation } from '@/store/api'

export const Login: FC = () => {
  const methods = useConfiguredForm<TSignInCredentials>(SignInSchema)

  const router = useRouter()

  const [loginUser, { data }] = useLoginMutation()

  const submitHandler: SubmitHandler<TSignInCredentials> = payload => {
    loginUser(payload)
  }

  useEffect(() => {
    if (!data) return

    router.push('/dashboard')
  }, [data, router])

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

        <PrimaryButton type="submit">Sign In</PrimaryButton>
      </Form>
    </AuthScreen>
  )
}
