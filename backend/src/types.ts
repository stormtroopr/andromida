export interface SocketMessage {
  state: { items: unknown[] }
  items: unknown[]
  type: 'STATE_UPDATE' | 'EVENT_UPDATE' | 'SUBSCRIPTION_ID'
  error: boolean
  message: string
}

export interface EventType {
  context: any
  createdDate?: Date
  offset?: number
  payload: any
  subject: string
  topic: string
}
