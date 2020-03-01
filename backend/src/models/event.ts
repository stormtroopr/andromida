import mongoose from 'mongoose'
import AutoIncrement from 'mongoose-sequence'

const Schema = mongoose.Schema

export const EventSchema = new Schema({
  payload: {
    type: Object
  },
  subject: {
    type: String
  },
  topic: {
    type: String
  },
  context: {
    type: Object,
    required: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  offset: {
    type: Number,
    default: 0
  }
})

EventSchema.plugin(AutoIncrement(mongoose), { inc_field: 'offset' })

export const EventRecord = mongoose.model('Event', EventSchema)
