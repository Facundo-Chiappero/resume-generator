import { useUser } from "@clerk/clerk-react"
import { useGetUserPlan } from "./useGetUserPlan"

export function useIsPro() {
  const { user } = useUser()
  const { currentPlan } = useGetUserPlan({ userId: user?.id })
  return currentPlan === "Pro"
}
