import { useState, useMemo, ReactNode } from "react"
import { PersonalDataType } from "types"
import { PersonalDataContext } from "./useFormContextHooks"

export const PersonalDataProvider = ({ children }: { children: ReactNode }) => {
  const [personalDataForm, setPersonalDataForm] = useState<PersonalDataType>({
    address: "",
    location: "",
    email: "",
    phone: undefined,
  })

  const value = useMemo(
    () => ({ personalDataForm, setPersonalDataForm }),
    [personalDataForm]
  )

  return (
    <PersonalDataContext.Provider value={value}>
      {children}
    </PersonalDataContext.Provider>
  )
}
