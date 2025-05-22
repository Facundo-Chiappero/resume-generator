import { Router, Request, Response } from "express"
import { connectToDatabase, getPaymentsCollection } from "../config/db"

const router = Router()

router.post("/", async (req: Request, res: Response) => {
  try {
    const { paymentId, amount, planId, userId } = req.body
    if (
      paymentId == null ||
      amount == null ||
      amount == 0 ||
      planId == null ||
      userId == null
    ) {
      res.status(400).json({ message: "There is missing data" })
      return
    }

    await connectToDatabase()
    const paymentsCollection = getPaymentsCollection()

    const payment = {
      paymentId,
      amount,
      planId,
      userId,
      status: "completed",
      createdAt: new Date(),
    }

    await paymentsCollection.insertOne(payment)

    res.status(200).json({
      message: "Payment stored successfully!, Reload the page to see changes",
    })
  } catch (error) {
    console.error("Error saving payment", error)
    res.status(500).json({ message: "Error saving payment." })
  }
})

export default router
