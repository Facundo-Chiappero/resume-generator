import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env")
}

export const client = new MongoClient(uri)

let dbInstance: ReturnType<typeof client.db> | null = null

export async function connectToDatabase() {
  if (!dbInstance) {
    await client.connect()
    dbInstance = client.db("resume_generator")
  }
}

export function getPaymentsCollection() {
  if (!dbInstance) {
    throw new Error("Database not connected. Call connectToDatabase first.")
  }
  return dbInstance.collection("payments")
}
