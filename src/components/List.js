import React from 'react'
import Item from './ListItem'

export default ({list}) => {

  return (
    <ul>
      {list.map( (name, idx) => {
        console.log(idx, name)
        return <Item text={name}/>
      })}
    </ul>
  )

  // return list.reduce( (acc, i) => {
  //   acc += <li>Text</li>
  //   return acc
  // }, "")
  // return (
  //   <ul>
  //     {
  //       list.forEach( i => {
  //         console.log(i)
  //         return <Item text={i}/>
  //       })
  //     }
  //   </ul>
  // )
}
