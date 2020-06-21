import express from 'express'
import '@models/User'

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  return res.json({ message: 'olaaaaaaaa' })
})

server.listen(3334)
