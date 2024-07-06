import { DatabaseMemory } from './database-memory.js'
import { fastify } from 'fastify'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body

  database.create({
    title,
    description,
    duration,
  })

  return reply.status(201).send()
})

server.get('/videos', () => {
  const videos = database.list()

  console.log(videos)

  return videos
})

server.put('/videos/:id', (request, reply) => {
  const videoId = request.params.id
  const { title, description, duration } = request.body

  database.update(videoId, {
    title,
    description,
    duration,
  })

  return reply.status(204).send()
})

server.delete('/videos/:id', () => {
  return 'Hello world'
})

server.listen({
  port: 3333,
})
