import { ObjectSchema, object, ref, string } from 'yup'

import { Constants } from '@/shared/constants'

import { createValidatorMinMaxString } from '@/shared/utils'

import { type TSignUpCredentials } from '@/shared/types'

const { patterns } = Constants

export const SignUpSchema: ObjectSchema<TSignUpCredentials> = object().shape({
  firstName: string()
    .required('The field is required')
    .min(2, createValidatorMinMaxString('min', 2))
    .max(28, createValidatorMinMaxString('max', 28))
    .matches(patterns.firstName, {
      message: 'The field must contain only alphabetic characters',
    }),
  lastName: string()
    .required('The field is required')
    .min(3, createValidatorMinMaxString('min', 3))
    .max(30, createValidatorMinMaxString('max', 30))
    .matches(patterns.lastName, {
      message: 'The field must contain only alphabetic characters',
    }),
  login: string()
    .required('The field is required')
    .min(6, createValidatorMinMaxString('min', 6))
    .max(16, createValidatorMinMaxString('max', 16))
    .matches(patterns.login, {
      message:
        'The field must contain only alphanumeric characters, _ and start with a letter',
    }),
  email: string().required('The field is required').matches(patterns.email, {
    message: 'Invalid email format',
  }),
  password: string()
    .required('The field is required')
    .matches(patterns.password, {
      message:
        'The password must contain special characters: #?!@$%^&* - and it have a length of at least 8 characters',
    }),
  confirm: string()
    .required('The field is required')
    .matches(patterns.password, {
      message:
        'The password must contain special characters: #?!@$%^&* - and it have a length of at least 8 characters',
    })
    .oneOf([ref('password')], `Password doesn't match`),
})
