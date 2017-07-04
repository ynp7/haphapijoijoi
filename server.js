const Hapi = require('hapi')
const Path = require('path')

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'dist')
      }
    }
  }
})
server.connection({ port: 8080 })


server.register(require('inert'), (err) => {
  if (err) {
    throw err
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
    // handler: function (request, reply) {
    //   reply.file('./dist/index.html')
    // }
  })
})



server.start( (err) => {
  if (err) {
    throw err
  }


  console.log(`Server running at ${server.info.uri}`)
})
