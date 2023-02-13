import { MongoClient } from 'mongodb'

if (!process.env.NEXT_PUBLIC_MONGO_DB) {
    throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_MONGO_DB"')
}

const uri = process.env.NEXT_PUBLIC_MONGO_DB
const options = {}

let client
let clientPromise: Promise<MongoClient>


client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise
