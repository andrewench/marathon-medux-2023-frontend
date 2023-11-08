import { ObjectSchema, object, string } from 'yup'

import { type TSignInCredentials } from '@/shared/types'

export const SignInSchema: ObjectSchema<TSignInCredentials> = object().shape({
  login: string().min(6).max(24).required('The field is required'),
  password: string().min(8).max(32).required('The field is required'),
})
