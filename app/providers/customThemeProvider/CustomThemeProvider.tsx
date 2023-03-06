import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { FC, ReactElement, createContext, useMemo, useState } from 'react'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
const cache = createCache({
  key: 'custom',
  prepend: true,
})

const CustomThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  )
}

export default CustomThemeProvider
