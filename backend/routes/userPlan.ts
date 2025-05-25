import { Request, Response, Router } from "express"
import { connectToDatabase, getPaymentsCollection } from "../config/db"

const router = Router()

router.post("/", async (req: Request, res: Response) => {
  try {
    const { userId } = req.body
    if (!userId) {
      res.status(400).json({ message: "user not found" })
      return
    }
    await connectToDatabase()
    const paymentsCollection = getPaymentsCollection()

    const userPlan = await paymentsCollection.findOne({ userId })
    if (!userPlan || !userPlan.planId) {
      res.status(404).json({ message: "plan not found" })
      return
    }

    res.status(200).json({ plan: userPlan.planId })
  } catch (err) {
    console.error(err)
    res.status(400).json({ message: "there was an error" })
  }

  return
})

export default router
