import { FC, PropsWithChildren } from 'react'

import { DocumentLayout } from '@/components/layout'

export const metadata = {
  title: 'Medux | Log in',
}

const LoginLayout: FC<PropsWithChildren> = ({ children }) => (
  <DocumentLayout>{children}</DocumentLayout>
)

export default LoginLayout
