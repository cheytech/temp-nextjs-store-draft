'useclient';
import React from 'react'
import { ThemeProvider } from './theme-provider';
const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
