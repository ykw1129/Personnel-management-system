import React from 'react'
import { useArray } from '../../hooks/index';
type Props = {}
const persons:{name:string,age:number}[] = [
    {name:'jack',age:20},
    {name:'ma',age:30}
]
export const List = (props: Props) => {
    const {value,clear,removeIndex,add} = useArray(persons)
  return (
    <div>
        <button onClick={()=>add({name:'john',age:30})}>add john</button>
        <button onClick={()=>removeIndex(0)}>remove 0</button>
        <button onClick={()=>clear()}>clear</button>
        <ul>
            {value.map((person,index)=> <li key={index}>{person.name}-{person.age}</li>)}
        </ul>
    </div>
  )
}