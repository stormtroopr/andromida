import { createWebSocketServer } from '@marblejs/websockets'
import { IO } from 'fp-ts/lib/IO'
import webSocketListener from './webSocket.listener'

const webSocketServer = createWebSocketServer({
  options: {
    port: 3001,
    host: '127.0.0.1'
  },
  listener: webSocketListener
})

const main: IO<void> = async () => await (await webSocketServer)()

main()
