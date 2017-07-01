const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 8080 })

server.register( require('inert'), (err) => {
  if (err) {
    throw err
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply('Hello, World!')
    }
  })
})

server.start( (err) => {
  if (err) {
    throw err
  }


  console.log(`Server running at ${server.info.uri}`)
})
