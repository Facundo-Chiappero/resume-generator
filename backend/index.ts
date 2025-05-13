import { configDotenv } from "dotenv"
import express from "express"
import { GoogleGenAI } from "@google/genai"

configDotenv()
const app = express()
const PORT = 3000

app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL)
  res.header("Access-Control-Allow-Methods", "POST")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY })

app.post("/useAI", async (req, res) => {
  const { instruction } = req.body

  // that thing with Math.floor and Math.random is for the AI to use a number between 4, 10 or 100
  const maxScore = [4, 10, 100][Math.floor(Math.random() * 3)]

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: instruction,
    config: {
      // eslint-disable-next-line no-useless-escape
      systemInstruction: `Only provide what is requested, with no explanations, no additional text, no quotation marks or formatting. Your primary task is to IMPROVE EXISTING TEXT, not generate new content. Improve formatting, spelling, capitalization and grammar while preserving the original meaning and content. Never replace addresses, names, emails or other specific data with completely different information. Respond only with the enhanced version of the input text. No introduction, no quotation marks, no Markdown formatting. When the user asks you to give a GPA don't forget to include the top score. If someone asks you for a GPA the maximum score must be: ${maxScore}. For phone numbers: NEVER change area codes or any digits - only improve formatting by adding appropriate separators (spaces, hyphens, or parentheses). The digits must remain exactly the same as provided. The format must match with this regex: /\d[\d\s]{5,20}$/.`,
    },
  })
  const text = response.text?.replace("\n", "")

  res.json({ message: text })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
