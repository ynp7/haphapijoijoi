const React = require('react')

import Item from './ListItem'
import List from './List'

const list = [
  'Timothy',
  'Helene',
  'Bestfriend',
  'Coral',
  'Kodabears'
]

const Hello = ({name}) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>This is a message from the world of the future.</p>
      <p>It required a lot of steps to set up, such as:</p>
      <ul>
        <Item text="Hello, World!"/>
        <Item text="How's this??"/>
        <li>yarn init -y</li>
        <li>yarn add -D webpack</li>
        <li>...</li>
      </ul>
      <p>React list:</p>
      <List list={list}/>
      <p>— <a href="http://mrlasers.com">MrLasers</a></p>
    </div>
  )
}

export default Hello
