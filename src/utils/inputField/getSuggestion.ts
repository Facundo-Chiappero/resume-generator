import { UseAIRequestBodyType } from "types"

export async function getSuggestion({
  instruction,
  headDataForm,
  personalDataForm,
  educationForm,
  experienceForm,
  projectForm,
  skillsForm,
}: UseAIRequestBodyType) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/useAI`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instruction,
        personalDataForm,
        headDataForm,
        educationForm,
        experienceForm,
        projectForm,
        skillsForm,
      }),
    })

    if (!response.ok)
      throw new Error("There was an error while getting suggestion")

    const data = await response.json()

    // used to avoid having a response like GPA: 5/10
    if (/gpa\s*:?\s*/i.test(instruction)) {
      data.message = data.message.replace(/gpa\s*:?\s*/i, "")
    }

    return { status: 200, message: data.message }
  } catch (err) {
    if (err instanceof Error) return { status: 400, message: err.message }
    return { status: 400, message: "Unexpected error" }
  }
}
