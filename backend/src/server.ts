import express from 'express'
import http from 'http'
import webSocket from './socket'
import mongoose from 'mongoose'
import db from './db/db'

const port = process.env.PORT || 3001
const app = express()
const server = http.createServer(app)
//start our server
server.listen(port, () => {
  console.log(`Express server started on port ${port} :)`)
})

// connect to the DB

db

// open the websocket
webSocket(server)

// http routes
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})
