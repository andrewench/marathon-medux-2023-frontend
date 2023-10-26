import {
  ForwardedRef,
  ReactComponentElement,
  createElement,
  forwardRef,
} from 'react'

import cn from 'clsx'

import { type TFlex } from './flex.interface'

export const Flex = forwardRef(function Flex(
  {
    children,
    align = 'start',
    content = 'start',
    direction = 'row',
    as = 'div',
    className,
  }: TFlex,
  ref?: ForwardedRef<ReactComponentElement<typeof as>>,
) {
  return createElement(
    as,
    {
      ref,
      className: cn(
        'flex',
        {
          'items-start': align === 'start',
          'items-center': align === 'center',
          'items-end': align === 'end',
          'justify-start': content === 'start',
          'justify-center': content === 'center',
          'justify-end': content === 'end',
          'justify-between': content === 'space-between',
          'justify-around': content === 'space-around',
          'justify-evenly': content === 'space-evenly',
          'flex-col': direction === 'column',
          'flex-col-reverse': direction === 'column-reverse',
          'flex-row-reverse': direction === 'row-reverse',
        },
        className,
      ),
    },
    children,
  )
})
