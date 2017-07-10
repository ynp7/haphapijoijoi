const React = require('react')
const ReactDOM = require('react-dom')

import Hello from './components/hello'

import './styles.less'

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name="Timothy Pew"/>
      </div>
    )
  }
}

export default App

// const _join = require('lodash').join
//
// const steelz = require('./styles.less')
//
// console.log(process.env.NODE_ENV)
//
// if (module.hot) {
//   module.hot.accept()
// }
//
// const component = () => {
//   var element = document.createElement('div')
//   process.env.NODE_ENV === 'production'
//     ? element.innerHTML = _join(['===', 'PRODUCTION SERVER', '==='], ' ')
//     : element.innerHTML = _join(['===', 'DEVELOPMENT SERVER', '==='], ' ')
//   return element
// }
//
// console.log('Hello, Webpack! --bundled!')
//
// // document.body.appendChild(component())
// const app = document.getElementById('app')
//
// app.innerHTML = component().innerHTML
//
// console.log('TEST:', app.innerHTML)
//app.innerHTML(component)

// document.body.appendChild( () => {
//   var element = document.createElement('h1')
//   element.innerHTML = 'Hello from the future!'
//   return element
// })
