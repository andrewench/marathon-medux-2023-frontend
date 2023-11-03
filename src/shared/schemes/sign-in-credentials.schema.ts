import { ObjectSchema, object, string } from 'yup'

import { type TSignInCredentials } from '@/shared/types'

export const SignInSchema: ObjectSchema<TSignInCredentials> = object().shape({
  login: string().required('The field is required'),
  password: string().required('The field is required'),
})
