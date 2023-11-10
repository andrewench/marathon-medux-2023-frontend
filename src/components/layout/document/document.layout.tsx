import { FC } from 'react'

import cn from 'clsx'

import { roboto, rubik } from '@/shared/fonts'

import { PropsWithClassNameAndChildren } from '@/shared/types'

export const DocumentLayout: FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={cn(rubik.variable, roboto.variable, className)}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              if (typeof localStorage === 'object') {
                const head = document.documentElement
                const currentTheme = localStorage.getItem('marathon-theme')
                const prefersColorDarkScheme = '(prefers-color-scheme: dark)'
            
                const applyColorScheme = () => {
                  const isDark = window.matchMedia(prefersColorDarkScheme).matches
            
                  if (isDark) {
                    head.setAttribute('data-theme', 'dark')
                    localStorage.setItem('marathon-theme', 'dark')
                  } else {
                    head.setAttribute('data-theme', 'light')
                    localStorage.setItem('marathon-theme', 'light')
                  }
                }
            
                applyColorScheme()
            
                const changeColorScheme = () => {
                  applyColorScheme()
                }
            
                window
                  .matchMedia(prefersColorDarkScheme)
                  .addEventListener('change', changeColorScheme)
              }
            } catch (_) {}
          `,
          }}
        />

        {children}
      </body>
    </html>
  )
}
