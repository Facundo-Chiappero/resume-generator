import { useState, useMemo, ReactNode } from "react"
import { ProgressContext } from "./useFormContextHooks"

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState(0)

  const value = useMemo(() => ({ progress, setProgress }), [progress])

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}
