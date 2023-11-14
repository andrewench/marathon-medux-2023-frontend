import { ObjectSchema, object, string } from 'yup'

import { Constants } from '@/shared/constants'

import { createValidatorMinMaxString } from '@/shared/utils'

import { type TSignInCredentials } from '@/shared/types'

const { patterns } = Constants

export const SignInSchema: ObjectSchema<TSignInCredentials> = object().shape({
  login: string()
    .required('The field is required')
    .min(6, createValidatorMinMaxString('min', 6))
    .max(16, createValidatorMinMaxString('max', 16))
    .matches(patterns.login, {
      message:
        'The field must contain only alphanumeric characters, _ and start with a letter',
    }),
  password: string()
    .required('The field is required')
    .matches(patterns.password, {
      message:
        'The password must contain special characters: #?!@$%^&* - and it have a length of at least 8 characters',
    }),
})
