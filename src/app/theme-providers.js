"use client"
import { ThemeProvider } from 'next-themes'

const Providers = ({children}) => {
  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme="light"
      enableSystem={false}
      storageKey="inews-theme"
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers