import { DatabaseMemory } from './database-memory.js'
import { fastify } from 'fastify'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
  database.create({
    title: 'Video 1',
    description: 'Esse é o vídeo 01',
    duration: 180,
  })

  return reply.status(201).send()
})

server.get('/videos', () => {
  return 'Hello again'
})

server.put('/videos/:id', () => {
  return 'Hello Node.js'
})

server.delete('/videos/:id', () => {
  return 'Hello world'
})

server.listen({
  port: 3333,
})
