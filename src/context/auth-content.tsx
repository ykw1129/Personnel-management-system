import React from 'react'
import { useState } from 'react';
interface AuthForm {
   username:string,
   password:string
}
type Props = {}
const AuthContext = React.createContext(undefined)
AuthContext.displayName = 'AuthContext'
export const AuthContent = (props: Props) => {
  const [user,setUser] = useState(null)
  return (
    <div>auth-content</div>
  )
}