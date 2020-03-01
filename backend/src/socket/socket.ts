import WebSocket from 'ws'
import http from 'http'
import { Event } from '../constants'
import { postEffect } from '../effects/postEffect'

const webSocket = (server: http.Server) => {
  const wss = new WebSocket.Server({ server })

  wss.on(Event.CONNECT, (socket: WebSocket) => {
    console.log('A user connected to the websocket...')

    socket.on(Event.MESSAGE, (message: any) => {
      //log the received message and send it back to the client
      console.log('received message', JSON.parse(message))

      postEffect(JSON.parse(message))

      wss.clients.forEach(client => {
        if (client !== socket) {
          client.send(`Hello, broadcast message -> ${JSON.stringify(message)}`)
        }
      })
    })

    socket.on(Event.ERROR, (err: Error) => {
      console.log('socket error', err)
    })

    socket.on(Event.DISCONNECT, () => {
      console.log('Client disconnected...')
    })
  })
}

export default webSocket
