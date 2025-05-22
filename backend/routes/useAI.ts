import { Router } from "express"
import { GoogleGenAI } from "@google/genai"

const router = Router()

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY ?? "" })

router.post("/", async (req, res) => {
  const { instruction } = req.body

  const maxScore = [4, 10, 100][Math.floor(Math.random() * 3)]

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flah",
      contents: instruction,
      config: {
        // eslint-disable-next-line no-useless-escape
        systemInstruction: `Only provide what is requested, with no explanations, no additional text, no quotation marks or formatting. Your primary task is to IMPROVE EXISTING TEXT, not generate new content. Improve formatting, spelling, capitalization and grammar while preserving the original meaning and content. Never replace addresses, names, emails or other specific data with completely different information. Respond only with the enhanced version of the input text. No introduction, no quotation marks, no Markdown formatting. When the user asks you to give a GPA don't forget to include the top score. If someone asks you for a GPA the maximum score must be: ${maxScore}. For phone numbers: NEVER change area codes or any digits - only improve formatting by adding appropriate separators (spaces, hyphens, or parentheses). The digits must remain exactly the same as provided. The format must match with this regex: /\d[\d\s]{5,20}$/.`,
      },
    })
    const text = response.text?.replace("\n", "")
    res.status(200).json({ message: text })
    return
  } catch (error) {
    console.log(error)
    res
      .status(400)
      .json({ message: "There was an error while getting suggestion" })
    return
  }
})

export default router
