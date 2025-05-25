import express from "express"
import { configDotenv } from "dotenv"
import payment from "./routes/paypalPayment"
import useAI from "./routes/useAI"
import userPlan from "./routes/userPlan"

configDotenv()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL || "*")
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

app.use("/userPlan", userPlan)
app.use("/paypalPayment", payment)
app.use("/useAI", useAI)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http:localhost:${PORT}`)
})
