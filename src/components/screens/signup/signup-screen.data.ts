import { ITextField } from '@/components/ui'

import { TSignUpCredentials } from '@/shared/types'

export const SignUpFieldsList: ITextField<TSignUpCredentials>[] = [
  {
    field: 'firstName',
    label: 'First Name',
    placeholder: 'Enter First Name',
    type: 'text',
  },
  {
    field: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter Last Name',
    type: 'text',
  },
  {
    field: 'login',
    label: 'Login',
    placeholder: 'Enter Login',
    type: 'text',
  },
  {
    field: 'email',
    label: 'Email Address',
    placeholder: 'Enter Email Address',
    type: 'text',
  },
  {
    field: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    type: 'password',
  },
  {
    field: 'confirm',
    label: 'Confirm password',
    placeholder: 'Enter Confirm password',
    type: 'password',
  },
]
