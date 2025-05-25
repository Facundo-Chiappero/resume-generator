import { useEffect, useState } from "react"

export function useGetUserPlan({ userId }: { userId: string | undefined }) {
  const [currentPlan, setCurrentPlan] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      if (!userId) return

      // i don't really care about handling errors in this fetch as it's used to get the user plan, and if there is no user it will throw an error but if there is it will never throw an error
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/userPlan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
      })

      const data = await res.json()

      if (res.ok) setCurrentPlan((await data.plan).replace(/"/g, ""))
    })()
  }, [userId])

  return {
    currentPlan,
    setCurrentPlan,
  }
}
