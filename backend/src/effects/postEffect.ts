import { EventRecord } from '../models/event'
import { v4 as uuidv4 } from 'uuid'
import { EventType } from 'types'

export const postEffect = message => {
  console.log('MESSAGE>>', message)
  const event: EventType = {
    ...message
  }

  console.log('EVENT', event)

  try {
    const e = new EventRecord(event)

    e.save(err => {
      if (err) return err
    })
  } catch (err) {
    throw new Error(err)
  }
}
