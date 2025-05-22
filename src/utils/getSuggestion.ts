export async function getSuggestion({ instruction }: { instruction: string }) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/useAI`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ instruction }),
    })

    if (!response.ok)
      throw new Error("There was an error while getting suggestion")

    const data = await response.json()
    return { status: 200, message: data.message }
  } catch (err) {
    if (err instanceof Error) return { status: 400, message: err.message }
    return { status: 400, message: "Unexpected error" }
  }
}
