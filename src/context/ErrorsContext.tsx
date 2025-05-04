import { useState, useMemo, ReactNode } from "react"
import { FormErrors } from "types"
import { ErrorsContext } from "./useFormContextHooks"

export const ErrorsProvider = ({ children }: { children: ReactNode }) => {
  const [errors, setErrors] = useState<FormErrors>({})

  const value = useMemo(() => ({ errors, setErrors }), [errors])

  return (
    <ErrorsContext.Provider value={value}>{children}</ErrorsContext.Provider>
  )
}
