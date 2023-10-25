import localFont from 'next/font/local'

export const rubik = localFont({
  src: [
    {
      path: '../../assets/fonts/Rubik-Light.ttf',
      weight: '300',
    },
    {
      path: '../../assets/fonts/Rubik-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/Rubik-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../assets/fonts/Rubik-Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-rubik',
})
