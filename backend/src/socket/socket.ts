import WebSocket from 'ws'
import http from 'http'
import { Event } from '../constants'
import { postEffect } from '../effects/postEffect'
import { getEffect } from '../effects/getEffect'
import { Observable, BehaviorSubject } from 'rxjs'

const webSocket = (server: http.Server) => {
  const wss = new WebSocket.Server({ server })

  const observable = Observable.create(obs => {
    wss.on(Event.CONNECT, socket => obs.next)
    wss.on(Event.MESSAGE, socket => obs.next)
  })



  //   const connectionMessage$ = new BehaviorSubject(observer => {
  //     wss.on(Event.CONNECT, (socket: WebSocket) => {
  //       console.log('A user connected to the websocket...')
  //       socket.on(Event.MESSAGE, (message: any) => {
  //         observer.next({
  //           client: socket,
  //           message
  //         })
  //       })
  //     })
  //   })

  //   return connectionMessage$

  //   wss.on(Event.CONNECT, (socket: WebSocket) => {
  //     socket.on(Event.MESSAGE, async (message: any) => {
  //       //log the received message and send it back to the client
  //       console.log('received message', message)

  //       const msg = JSON.parse(message)

  //       if (msg.type === 'GET') {
  //         console.log('GET THE MESSAGE')
  //         const rec = await getEffect(msg.topic, msg.subject)
  //         socket.send(`Found record ${JSON.stringify(rec)}`)
  //       }

  //       if (msg.type === 'PATCH') {
  //         postEffect(msg)
  //       }
  //     })

  //     socket.on(Event.ERROR, (err: Error) => {
  //       console.log('socket error', err)
  //     })

  //     socket.on(Event.DISCONNECT, () => {
  //       console.log('Client disconnected...')
  //     })
  //   })
}

export default webSocket
