export async function getSuggestion({ instruction }: { instruction: string }) {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/useAI`, {
    body: JSON.stringify({
      instruction,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
      return "There was an error"
    })
}
