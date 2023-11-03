'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

import cn from 'clsx'

import { Flex, Form } from '@/components/layout'

import { MainProvider } from '@/components/providers'

import { Heading } from '@/components/shared'

import { FormHelper, PrimaryButton, TextField } from '@/components/ui'

import { SignInSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { type TSignInCredentials } from '@/shared/types'

import styles from './login.module.scss'

const LoginPage: FC = () => {
  const methods = useConfiguredForm<TSignInCredentials>(SignInSchema)

  const submitHandler: SubmitHandler<TSignInCredentials> = payload => {
    console.log(payload)
  }

  return (
    <MainProvider>
      <Flex className="page">
        <Flex
          direction="column"
          align="center"
          className={cn(styles.section, styles.formSection)}
        >
          <Flex
            direction="column"
            content="space-between"
            className={styles.sectionContent}
          >
            <Link href="/" className={styles.homeLink}>
              <Image
                src="/logo.svg"
                alt="Medux Logo"
                width={162}
                height={42}
                quality={100}
                draggable={false}
              />
            </Link>

            <div>
              <Heading className={styles.heading}>Sign In</Heading>

              <Form<TSignInCredentials>
                methods={methods}
                onSubmit={submitHandler}
                className={styles.form}
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

                <PrimaryButton type="submit">Sign in</PrimaryButton>
              </Form>
            </div>

            <FormHelper
              label="Don't have an account?"
              link={{ href: '/signup', label: 'Sign up' }}
            />
          </Flex>
        </Flex>

        <div className={cn(styles.section, styles.poster)} />
      </Flex>
    </MainProvider>
  )
}

export default LoginPage
