// const _ = require('lodash')

const steelz = require('./styles.less')

console.log(process.env.NODE_ENV)

const component = () => {
  var element = document.createElement('div')
  process.env.NODE_ENV === 'production'
    ? element.innerHTML = 'BookEDit, coming soon!'
    : element.innerHTML = '=== PRODUCTION SERVER ==='
  return element
}

console.log('Hello, Webpack! --bundled!')

document.body.appendChild(component())

// document.body.appendChild( () => {
//   var element = document.createElement('h1')
//   element.innerHTML = 'Hello from the future!'
//   return element
// })
