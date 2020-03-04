import { webSocketListener } from '@marblejs/websockets'

const effects = []

const middlewares = []

export default webSocketListener({ effects, middlewares })
