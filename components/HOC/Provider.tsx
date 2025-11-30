import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ThemeProvider attribute='class' enableSystem defaultTheme='system'>
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Provider