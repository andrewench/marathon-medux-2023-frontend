import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Form } from '@/components/layout'
import { AuthScreen } from '@/components/layout/auth-screen/auth-screen.layout'

import { FormHelper, PrimaryButton, TextField } from '@/components/ui'

import { SignUpSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { TSignUpCredentials } from '@/shared/types'

import { SignUpFieldsList } from './signup-screen.data'

export const SignUp: FC = () => {
  const methods = useConfiguredForm<TSignUpCredentials>(SignUpSchema)

  const submitHandler: SubmitHandler<TSignUpCredentials> = payload => {
    console.log(payload)
  }

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
      <Form<TSignUpCredentials>
        methods={methods}
        onSubmit={submitHandler}
        className="auth-form"
      >
        {SignUpFieldsList.map((props, idx) => (
          <TextField<TSignUpCredentials> key={idx} {...props} />
        ))}

        <PrimaryButton type="submit">Sign Up</PrimaryButton>
      </Form>
    </AuthScreen>
  )
}
