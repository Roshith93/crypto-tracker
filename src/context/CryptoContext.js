import { useState, useMemo, createContext } from 'react'
import { createTheme } from '@mui/material/styles'

export const CryptoTrackerContext = createContext()

export const CryptoTrackerProvider = ({ children }) => {
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );
 
  return (
    <CryptoTrackerContext.Provider value={{colorMode, theme}}>
      {children}
    </CryptoTrackerContext.Provider>
  )
}
