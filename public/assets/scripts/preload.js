;(function () {
  if (typeof window !== 'object' && typeof localStorage !== 'object') return

  const config = {
    NAME: 'marathon-medux-config',
    default: {
      theme: 'system',
      fontZoom: 1,
    },
  }

  const headElement = document.documentElement

  const storage = localStorage.getItem(config.NAME)

  const resetStorage = () =>
    localStorage.setItem(config.NAME, JSON.stringify(config.default))

  if (!storage) {
    resetStorage()
  } else {
    try {
      const parsedConfig = JSON.parse(storage)

      if (typeof parsedConfig !== 'object') throw new Error()

      const { theme, fontZoom } = parsedConfig

      if (theme === 'light') {
        headElement.setAttribute('data-theme', 'light')
      } else if (theme === 'dark') {
        headElement.setAttribute('data-theme', 'dark')
      }

      typeof fontZoom === 'number'
        ? headElement.setAttribute('style', `--font-zoom: ${fontZoom}`)
        : headElement.setAttribute(
            'style',
            `--font-zoom: ${config.default.fontZoom}`,
          )

      if (theme !== 'system') return

      const applyColorScheme = () => {
        try {
          const storage = localStorage.getItem(NAME)

          const payload = JSON.parse(storage)

          if (typeof payload !== 'object') return

          if (!payload.theme) return

          const prefersColorDarkScheme = '(prefers-color-scheme: dark)'

          const isDark = window.matchMedia(prefersColorDarkScheme).matches

          if (isDark) {
            headElement.setAttribute('data-theme', 'dark')
          } else {
            headElement.setAttribute('data-theme', 'light')
          }
        } catch (_) {}
      }

      applyColorScheme()
    } catch (_) {
      resetStorage()
    }
  }
})()
