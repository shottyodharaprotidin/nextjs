"use client"
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { LanguageProvider } from '@/lib/LanguageContext'
import { HeaderDataProvider } from '@/lib/HeaderDataContext'

const ThemeContext = createContext({
  theme: 'skin-dark',
  setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

const ALLOWED_THEMES = ['light', 'skin-dark']

const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('skin-dark')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = window.localStorage.getItem('theme')
    const initialTheme = ALLOWED_THEMES.includes(storedTheme)
      ? storedTheme
      : (document.documentElement.getAttribute('data-theme') || 'skin-dark')

    document.documentElement.setAttribute('data-theme', initialTheme)
    setThemeState(initialTheme)
  }, [])

  const setTheme = (nextTheme) => {
    const resolvedTheme = ALLOWED_THEMES.includes(nextTheme) ? nextTheme : 'skin-dark'
    setThemeState(resolvedTheme)

    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', resolvedTheme)
      window.localStorage.setItem('theme', resolvedTheme)
    }
  }

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const Providers = ({ children, initialLocale = 'bn', initialHeaderData = null }) => {
  return (
    <HeaderDataProvider initialHeaderData={initialHeaderData}>
      <LanguageProvider initialLocale={initialLocale}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </LanguageProvider>
    </HeaderDataProvider>
  )
}

export default Providers