import mongoose from 'mongoose'

const dbAddress: string = 'mongodb://localhost:27017/myevents'

mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', () => console.error('connection error'))
db.on('open', () => {
  console.log(`DB connection to ${dbAddress} is open...`)
})

export default db
