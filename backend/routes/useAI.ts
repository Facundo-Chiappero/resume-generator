import { Router } from "express"
import { GoogleGenAI } from "@google/genai"
import { INSTRUCTIONS } from "../config/instructions"
import { UseAIRequestBodyType } from "@types"
import { sendEmail } from "../config/resend"

const router = Router()

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY ?? "" })

router.post("/", async (req, res) => {
  const {
    instruction,
    personalDataForm,
    headDataForm,
    educationForm,
    experienceForm,
    projectForm,
    skillsForm,
  }: UseAIRequestBodyType = req.body

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: instruction,
      config: {
        systemInstruction: INSTRUCTIONS({
          personalDataForm,
          headDataForm,
          educationForm,
          experienceForm,
          projectForm,
          skillsForm,
        }),
      },
    })
    const text = response.text?.replace("\n", "")
    res.status(200).json({ message: text })
    return
  } catch (error) {
    sendEmail({ error, subject: "Error getting suggestion" })

    res
      .status(400)
      .json({ message: "There was an error while getting suggestion" })
    return
  }
})

export default router
