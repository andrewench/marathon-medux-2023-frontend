type TAllFields =
  | 'firstName'
  | 'lastName'
  | 'login'
  | 'email'
  | 'password'
  | 'confirm'

export type TSignInCredentials = Record<
  Extract<TAllFields, 'login' | 'password'>,
  string
>
