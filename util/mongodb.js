import { MongoClient } from 'mongodb'

const { MONGODB_URI } = process.env

const MONGODB_DB = 'mitocode'

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect('mongodb+srv://admin:admin@cluster0.tlled.mongodb.net', opts).then((client) => {
      console.log(client)
      return {
        client,
        db: client.db('mitocode'),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}