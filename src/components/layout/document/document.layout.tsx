import { FC } from 'react'

import cn from 'clsx'

import { Constants } from '@/shared/constants'

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
          id="injected-theme"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `!function(){if("object"!=typeof window&&"object"!=typeof localStorage)return;const t=${JSON.stringify(
              Constants.storage,
            )},e=document.documentElement,{NAME:r,DEFAULT_CONFIG:o}=t,a=localStorage.getItem(r),c=()=>localStorage.setItem(r,JSON.stringify(o));if(a)try{const t=JSON.parse(a);if("object"!=typeof t)throw new Error;const o=t.theme;if("light"===o?e.setAttribute("data-theme","light"):"dark"===o&&e.setAttribute("data-theme","dark"),"system"!==o)return;const c=()=>{try{const t=localStorage.getItem(r),o=JSON.parse(t);if("object"!=typeof o)return;if(!o.theme)return;const a="(prefers-color-scheme: dark)";window.matchMedia(a).matches?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")}catch(t){}};c();const n=()=>{c()};window.matchMedia(prefersColorDarkScheme).addEventListener("change",n)}catch(t){c()}else c()}();`,
          }}
        />

        {children}
      </body>
    </html>
  )
}
