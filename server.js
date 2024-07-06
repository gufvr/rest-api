import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.write('Hello, world')

  return res.end()
})

server.listen(3333)
