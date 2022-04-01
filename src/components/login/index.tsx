import React, { FormEvent } from 'react'

type Props = {}

export const Index = (props: Props) => {
    const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        console.log(username,password)
    }
  return (
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>email</label>
                <input type="text" id={'username'} />
            </div>
                        <div>
                <label htmlFor='password'>password</label>
                <input type="password" id={'password'} />
            </div>
            <button type='submit'>登录</button>
        </form>
  )
}