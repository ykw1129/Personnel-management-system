import React, { ReactNode } from 'react'
import { AuthContent } from './auth-content';
type Props = {
    children:ReactNode
}

const AppProviders = ({children}:Props) => {
  return (
        <AuthContent>
            {children}
        </AuthContent>
  )
}