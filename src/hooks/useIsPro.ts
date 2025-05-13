import { useAuth } from "@clerk/clerk-react"

export function useIsPro() {
  const { has } = useAuth()
  // those operators are used in case that has is not loaded
  // when that happens the returned value is false
  const hasPremiumAccess = (has && has({ plan: "pro" })) || false

  return hasPremiumAccess
}
