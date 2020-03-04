import { EventRecord } from '../models/event'
import { EventType } from 'types'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export const getEffect = async (topic: string, subject: string) => {
  console.log('GET EFFECT', topic, subject)
  let x = {}

  await EventRecord.find({ topic: topic, subject: subject }, (err, docs) => {
    const res = docs
      .map(doc => doc.payload)
      .reduce((acc, curr) => {
        return Object.assign(acc, curr)
      }, {})

    x = res
  })

  return x
}
